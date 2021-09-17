const { Transaction } = require("../model/transaction")
const { User } = require("../model/user")

const payPalClient = require("../utils/ppclient")
const checkoutNodeJsskd = require("@paypal/checkout-server-sdk")

const addTransaction = async (req) => {

    let request = new checkoutNodeJsskd.orders.OrdersGetRequest(req.body.orderId)
    let order;

    try {
        order = await payPalClient.client.execute(request)
        console.log(order)
        const transaction = new Transaction({
            userID: req.user._id,
            userEmail: req.user.email,
            orderID: req.body.orderId,
            orderData: order.result
        })
        await transaction.save()

        const user = await User.findOneAndUpdate(
            { _id: req.user._id },
            {
                $push: {
                    history: [
                        {
                            transactionId: transaction._id,
                            date: transaction.date,
                            orderID: req.body.orderId,
                            amount: transaction.orderData[0].purchase_units[0].amount.value,
                            items: transaction.orderData[0].purchase_units[0].items,
                        }
                    ]
                },
                $set: { cart: [] }
            },
            { new: true }
        )

        return user



    } catch (error) {
        throw error
    }
}

module.exports = {
    addTransaction
}