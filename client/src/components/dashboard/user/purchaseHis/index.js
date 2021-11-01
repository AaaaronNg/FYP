import React from "react"
import DashboardLayout from "../../../../hoc/dashboardLayout"
import HistoryTable from "./historyTable"

const PurchaseHis = ({ users }) => {


    return <>
        <DashboardLayout>
            <div class="h1 fw-bold">Overview</div>

            <div class="bg-light">
                <div class="h4">Purchase History</div>

                <HistoryTable history={users.data.history} />

            </div>
        </DashboardLayout>


    </>
}

export default PurchaseHis