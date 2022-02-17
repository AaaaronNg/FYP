const { Category } = require("../model/category");
const { ApiError } = require("../middleware/apiError")
const httpStatus = require("http-status");
const category = require("../model/category")

const addCategory = async (categoryName) => {
    try {
        const category = new Category({
            name: categoryName,
        });
        await category.save();
        return category;
    } catch (error) {
        throw error;
    }
};

const getCategoryById = async (id) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            throw new ApiError(httpStatus.NOT_FOUND, "Category not found");
        }
        return category;
    } catch (error) {
        throw error;
    }
};

const deleteCategoryByID = async (id) => {
    try {
        const category = await Category.findByIdAndRemove(id);
        return category
    } catch (error) {
        throw error;
    }
}

const getCategories = async (args) => {
    try {
        let order = args.order ? args.order : "asc";
        //let limit = args.limit ? args.limit : 4;
        const categories = await Category.find({})
            .sort([["_id", order]])
        //.limit(limit);
        if (!categories) {
            return new ApiError(httpStatus.NOT_FOUND, "categories not found")
        }

        return categories
    } catch (error) {
        throw error
    }
}

module.exports = {
    addCategory,
    getCategoryById,
    deleteCategoryByID,
    getCategories
}

