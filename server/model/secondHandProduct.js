const mongoose = require("mongoose")
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const Schema = mongoose.Schema;

const secondHandProSchema = mongoose.Schema({
    name: {
        require: [true, "need a name"],
        type: String,
        unique: 1,
        maxlength: 250,
    },
    category: {
        require: [true, "need a category"],
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    description: {
        require: [true, "need a description"],
        type: String,
        maxlength: 1000,
    },
    price: {
        require: true,
        type: Number,
        default: 0,
    },
    images: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    owner: {
        require: [true, "need a owner"],
        type: Schema.Types.ObjectId,
        ref: "user"
    }
});

secondHandProSchema.plugin(aggregatePaginate);

const SecondHandProduct = mongoose.model("SecondHandProduct", secondHandProSchema)

module.exports = {
    SecondHandProduct,
}
