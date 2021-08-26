const { Brand } = require("../model/brand");
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");
const brand = require("../model/brand");

const addBrand = async (brandName) => {
  try {
    const brand = new Brand({
      name: brandName,
    });
    await brand.save();
    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrandById = async (id) => {
  try {
    const brand = await Brand.findById(id);
    if (!brand) {
      throw new ApiError(httpStatus.NOT_FOUND, "Brand not found");
    }
    return brand;
  } catch (error) {
    throw error;
  }
};

const deleteBrandByID = async (id) => {
  try {
    const brand = await Brand.findByIdAndRemove(id);

    return brand;
  } catch (error) {
    throw error;
  }
};

const getBrands = async (args) => {
  try {
    let order = args.order ? args.order : "asc";
    let limit = args.limit ? args.limit : 4;
    const brands = await Brand.find({})
      .sort([["_id", order]])
      .limit(limit);
    if (!brands) {
      return new ApiError(httpStatus.NOT_FOUND, "brands not found");
    }
    return brands;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBrand,
  getBrandById,
  deleteBrandByID,
  getBrands,
};
