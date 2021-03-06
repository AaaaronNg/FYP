const { userService, authService, emailService } = require("../services");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const { find } = require("lodash");
require("dotenv").config;



const usersController = {
  async profile(req, res, next) {
    try {
      const user = await userService.findUserById(req.user._id);
      if (!user) {
        return new ApiError(httpStatus.NOT_FOUND, "User not found");
      }
      res.json(res.locals.permission.filter(user._doc));
    } catch (error) {
      next(error);
    }
  },

  async updateProfile(req, res, next) {
    try {
      const user = await userService.updateUserProfile(req);

      res.json(user);
    } catch (error) {
      next(error);
    }
  },
  async updateUserEmail(req, res, next) {
    try {
      const user = await userService.updateUserEmail(req);
      const token = await authService.genAuthToken(user);

      // send email to verified account
      await emailService.registerEmail(user.email, user);

      res.cookie("x-access-token", token).send({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  },
  async verifyAccount(req, res, next) {
    try {
      const token = await userService.validateToken(req.query.validation);
      const user = await userService.findUserById(token.sub);
      console.log(token)


      if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
      if (user.verified) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Already verified");
      }


      user.verified = true;

      await user.save();
      res.redirect(`${process.env.EMAIL_MAIL_URL}verify`);



      // res.status(httpStatus.CREATED).send({
      //   user,
      // });
    } catch (error) {
      throw next(error);
    }
  },
  async updateUserCart(req, res, next) {
    try {
      const user = await userService.updateUserCart(req);
      res.json(user);

    } catch (error) {
      next(error)
    }
  },
  async removeFromCart(req, res, next) {
    try {
      const user = await userService.removeFromCart(req)
      res.json(user)
    } catch (error) {
      next(error)
    }
  },
  async findUserById(req, res, next) {
    try {
      const id = req.params.id
      const user = await userService.findUserById(id)
      res.json(user)
    } catch (error) {
      next(error)
    }
  }
};

module.exports = usersController;
