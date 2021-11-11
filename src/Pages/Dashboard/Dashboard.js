import React from 'react';
import './Dashboard.css'
import { Container, Nav, Offcanvas, Button } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddProduct from '../Dashboard/AddProduct/AddProduct'
import MyOrders from '../Dashboard/MyOrders/MyOrders'
import ManageAllOrders from '../Dashboard/ManageAllOrders/ManageAllOrder'
import ManageProducts from '../Dashboard/ManageProducts/ManageProducts'
import MakeAdmin from '../Dashboard/MakeAdmin/MakeAdmin'
import Payment from '../Dashboard/Payment/Payment'
import Reviews from '../Dashboard/Reviews/Reviews'


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div className = 'text-center'>
            <Navbar bg="dark" expand={false} variant="dark">
                <Container>
                    <Navbar.Brand className = 'text-uppercase'>Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className='custom-text-primary fw-bold text-uppercase custom-text-pink'>Dashboard</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3 dashbord">
                                <Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageOrders`}>Manage Orders</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/addProduct`}>Add Product</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/manageProducts`}>Manage Products</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/payment`}>Payment</Nav.Link>
                                <Nav.Link as={Link} to={`${url}/reviews`}>Reviews</Nav.Link>
                            </Nav>
                            <Link>
                                <Button className='custom-btn' style ={{margin :'10px 20px', width: '200px'}}>LogOut</Button>
                            </Link>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Switch>
                <Route path={`${path}/myOrders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/manageOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </Route>
                <Route path={`${path}/addProduct`}>
                    <AddProduct></AddProduct>
                </Route>
                <Route path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>
                <Route path={`${path}/reviews`}>
                    <Reviews></Reviews>
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;