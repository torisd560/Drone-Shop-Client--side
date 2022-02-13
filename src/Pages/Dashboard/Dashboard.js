import React from 'react';
import './Dashboard.css'
import { Nav, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddProduct from '../Dashboard/AddProduct/AddProduct'
import MyOrders from '../Dashboard/MyOrders/MyOrders'
import ManageAllOrders from '../Dashboard/ManageAllOrders/ManageAllOrder'
import ManageProducts from '../Dashboard/ManageProducts/ManageProducts'
import MakeAdmin from '../Dashboard/MakeAdmin/MakeAdmin'
import Payment from '../Dashboard/Payment/Payment'
import Reviews from '../Dashboard/Reviews/Reviews'
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import DashboardWelcome from './DashboardWelcome/DashboardWelcome';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, isLoading, handleLogout } = useAuth()

    if (isLoading) {
        return <div className='m-5 text-center'><Spinner animation="border" variant="warning" /></div>
    }


    return (
        <div className=' row m-0  text-center'>
            <div className="col-md-2 bg-dark py-4">
                <Nav className=" dashbord">
                    {admin ? <span>
                        <Nav.Link as={Link} to={`${url}/manageOrders`}>Manage Orders</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                        <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                        <Button onClick={handleLogout} className='custom-btn' style={{ margin: '10px 0px', width: '160px' }}><i className="fas fa-sign-out-alt me-2"></i>LogOut</Button>
                        <Nav.Link as={Link} to={`${url}/home`}>Back To Home</Nav.Link>
                    </span>
                        :
                        <span>
                            <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/reviews`}>Reviews</Nav.Link>
                            <Nav.Link as={Link} to={`/home`}>Back To Home</Nav.Link>
                            <Button onClick={handleLogout} className='custom-btn' style={{ marginTop: '300px', width: '160px' }}><i className="fas fa-sign-out-alt me-2"></i>LogOut</Button>
                        </span>}

                </Nav>
            </div>
            <div className="col-md-10 mt-5">
                <Switch>
                    <Route exact path={`${path}`}>
                        <DashboardWelcome></DashboardWelcome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/reviews`}>
                        <Reviews></Reviews>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;