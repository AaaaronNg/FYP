const passport = require("passport");
const { ApiError } = require("./apiError");
const httpStatus = require("http-status");
const user = require("../model/user");
const { roles } = require("../config/role");

const verify = (req, res, resolve, reject, rights) => async (err, user) => {
  if (err || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, "sorry unauthorized"));
  }
  req.user = user;
  if (rights.length) {
    const action = rights[0];
    const resource = rights[1];
    // console.log("rights[0]", rights[0]);
    // console.log("rights[1]", rights[1]);
    const permission = roles.can(req.user.role)[action](resource);
    if (!permission.granted) {
      return reject(
        new ApiError(
          httpStatus.UNAUTHORIZED,
          "sorry, you dont have enough rights"
        )
      );
    }
    res.locals.permission = permission;
  }

  resolve();
};

const auth = (...rights) => async (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate(
      "jwt",
      { session: false },
      verify(req, res, resolve, reject, rights)
    )(req, res, next);
  })
    .then(() => next())
    .catch((err) => next(err));
};

module.exports = auth;
