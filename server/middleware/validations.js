const { check, validationResult } = require("express-validator");
const httpStatus = require("http-status");

const addProductValidator = [
  check("price")
    .trim()
    .not()
    .isEmpty()
    .withMessage("you need to really add price")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

module.exports = {
  addProductValidator,
};
