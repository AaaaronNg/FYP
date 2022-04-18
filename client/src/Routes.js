import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./hoc/main.layout"
import Home from "./components/home"
import Header from "./components/navigation/header"
import Footer from "./components/navigation/footer"
import AuthForm from "./components/auth/authForm"
import Login from "./components/auth/login"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./utils/loader"
import { userIsAuth, userLogout } from "./store/action/user.actions";
import PurchaseHis from "./components/dashboard/user/purchaseHis/index"
import MyCart from "./components/dashboard/user/mycart/index"
import RouteGuard from "./hoc/routeGuard"
import UserInfo from "./components/dashboard/info"
import AdminProducts from "./components/dashboard/admin/products"
import AddProduct from "./components/dashboard/admin/products/add/index"
import Shop from "./components/shop/index"
import ProductDetail from "./components/product";
import VerifyPage from "./components/auth/verifyPage/index"
import MySecondHandProduct from "./components/dashboard/user/secondHandProduct/index"
import SecondHandMarket from "./components/SHP_display/index"
import Inbox from "./components/Inbox/index"

function Routes() {
  const [loading, setLoading] = useState(true)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const logoutUser = () => {
    // alert("logoutUser")

    dispatch(userLogout())
  }

  useEffect(() => {
    dispatch(userIsAuth())
  }, [dispatch])

  useEffect(() => {
    if (users.auth !== null) {
      setLoading(false)
    }
  }, [users])

  return <BrowserRouter>
    {
      loading ? <div style={{ padding: "300px" }}>
        <Loader />
      </div> :
        <>
          <Header users={users} logoutUser={logoutUser} />
          <MainLayout>
            <Switch>
              <Route path="/dashboard/admin/admin_products" component={RouteGuard(AdminProducts)} />
              <Route path="/dashboard/user_info" component={RouteGuard(UserInfo)} />
              <Route path="/dashboard/admin/add_products" component={RouteGuard(AddProduct)} />
              <Route path="/dashboard/user_cart" component={RouteGuard(MyCart)} />
              <Route path="/dashboard/purchase_history" component={RouteGuard(PurchaseHis)} />
              <Route path="/dashboard/user_SHP" component={RouteGuard(MySecondHandProduct)} />
              <Route path="/inbox" component={RouteGuard(Inbox)} />
              <Route path="/product_detail/:id" component={ProductDetail} />
              <Route path="/verify" component={RouteGuard(VerifyPage)} />
              <Route path="/SHP" component={SecondHandMarket} />
              <Route path="/login" component={Login} />
              <Route path="/shop" component={Shop} />
              <Route path="/register" component={AuthForm} />
              <Route path="/" component={Home} />
            </Switch>
          </MainLayout>
          <Footer />
        </>
    }
  </BrowserRouter>;
}

export default Routes;
