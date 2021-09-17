const { User } = require("../model/user");
const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");
const jwt = require("jsonwebtoken");
const mongooseAggregatePaginate = require("mongoose-aggregate-paginate-v2");
require("dotenv").config();

const validateToken = async (token) => {
  return jwt.verify(token, process.env.DB_SECRET);
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};

const findUserById = async (_id) => {
  return await User.findById(_id);
};



const updateUserCart = async (req) => {
  try {

    let duplicate = false;

    req.user.cart.forEach((item) => {
      if (req.body.product._id == item._id) {
        duplicate = true
      }
    })

    if (duplicate) {
      const user = User.findOneAndUpdate({
        _id: req.user._id, "cart._id": req.body.product._id
      },
        { $inc: { "cart.$.quantity": 1 } },
        { new: true }
      )
      return user
    }

    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $push: {
          cart: {
            _id: req.body.product._id,
            price: req.body.product.price,
            images: req.body.product.images,
            name: req.body.product.name,
            quantity: 1,
            date: Date.now()
          }
        }
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    return user
  } catch (error) {
    throw error
  }
}

const updateUserProfile = async (req) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const updateUserEmail = async (req) => {
  try {
    if (await User.emailTaken(req.body.newemail)) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Sorry email taken");
    }

    const user = await User.findOneAndUpdate(
      { _id: req.user._id, email: req.user.email },
      {
        $set: {
          email: req.body.newemail,
          verified: false,
        },
      },
      { new: true }
    );
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const removeFromCart = async (req) => {
  try {
    console.log(req.body.id)
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      {
        $pull: {
          cart: { _id: req.body.id }
        }
      },
      { new: true }
    )
    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    return user
  } catch (error) {
    throw error
  }
}

module.exports = {
  findUserByEmail,
  findUserById,
  updateUserProfile,
  updateUserEmail,
  validateToken,
  updateUserCart,
  removeFromCart
};
