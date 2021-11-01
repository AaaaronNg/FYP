import React from "react"
import Moment from "react-moment"

const HistoryTable = ({ history }) => {


    return <>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount Paid</th>
                    <th scope="col">Order ID</th>
                </tr>
            </thead>
            <tbody>
                {history.slice(0).reverse().map((item, i) => (
                    <tr key={i}>
                        <td class="align-middle"><Moment to={item.date}></Moment></td>
                        <td class="align-middle">${item.amount}</td>
                        <td class="align-middle">{item.orderID}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default HistoryTable