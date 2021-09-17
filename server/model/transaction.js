const mongoose = require("mongoose")
const validator = require("validator")

const transactionSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    userEmail: {
        type: String,
        require: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email")
            }
        }
    },
    orderID: {
        type: String,
        require: true
    },
    orderData: {
        type: Array,
        require: true,
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Transaction = mongoose.model("Transaction", transactionSchema)
module.exports = { Transaction }