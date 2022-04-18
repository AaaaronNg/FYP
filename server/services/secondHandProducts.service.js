const { SecondHandProduct } = require("../model/secondHandProduct")
const { ApiError } = require("../middleware/apiError");
const httpStatus = require("http-status");

const secondHandProduct = require("../model/secondHandProduct")
const mongoose = require("mongoose");
const product = require("../model/product");



const addSecondHandProduct = async (body) => {
    try {
        const secondHandProduct = new SecondHandProduct({
            ...body,
        });

        await secondHandProduct.save();
        return secondHandProduct;
    } catch (error) {
        throw error;
    }
}

const getSHPbyId = async (_id) => {
    try {
        const shp = await SecondHandProduct.findById(_id).populate("category")
        if (!shp) {
            throw new ApiError(httpStatus.NOT_FOUND, "Second-hand product not found")
        }
        return shp;
    } catch (error) {
        throw error
    }
}

const updateSHPbyId = async (_id, body) => {
    try {
        const shp = await SecondHandProduct.findOneAndUpdate(
            { _id },
            { $set: body },
            { new: true }
        )
        if (!shp) {
            throw new ApiError(httpStatus.NOT_FOUND, "Second-hand product not found")
        }
        return shp
    } catch (error) {
        throw error
    }
}

const deleteSHPbyId = async (_id) => {
    try {
        const shp = await SecondHandProduct.findByIdAndRemove(_id)
        if (!shp) {
            throw new ApiError(httpStatus.NOT_FOUND, "Second-hand product not found")
        }
        return shp
    } catch (error) {
        throw error
    }
}

const allSHPs = async (req) => {
    try {
        const shps = await SecondHandProduct.find({})
            .populate("category")
            .sort([[req.query.sortBy, req.query.order]])
            .limit(parseInt(req.query.limit))

        return shps;
    } catch (error) {
        throw error
    }
}

const paginateSHPs = async (req) => {
    try {
        let aggQueryArray = []

        if (req.body.keywords && req.body.keywords != "") {
            const re = new RegExp(`${req.body.keywords}`, "gi");
            aggQueryArray.push({
                $match: { name: { $regex: re } },
            });
        }

        if (req.body.category && req.body.category != "") {

            let categoryArray = req.body.category.map((item) =>
                mongoose.Types.ObjectId(item)
            );
            aggQueryArray.push({
                $match: { category: { $in: categoryArray } },
            });
        }

        if (req.body.userID && req.body.userID != "") {
            let userIDArr = req.body.userID.map((item) =>
                mongoose.Types.ObjectId(item)
            );
            aggQueryArray.push({
                $match: { owner: { $in: userIDArr } },
            });

        }

        aggQueryArray.push(
            {
                $lookup: {
                    from: "categories",
                    localField: "category",
                    foreignField: "_id",
                    as: "category"
                },
            },
            { $unwind: "$category" }
        )
        let aggQuery = SecondHandProduct.aggregate(aggQueryArray)
        const options = {
            page: req.body.page,
            limit: 8,
            sort: { date: "desc" }
        }
        const shps = await SecondHandProduct
            .aggregatePaginate(aggQuery, options)

        return shps
    } catch (error) {
        throw error
    }
}

module.exports = {
    addSecondHandProduct,
    getSHPbyId,
    updateSHPbyId,
    deleteSHPbyId,
    allSHPs,
    paginateSHPs
}
