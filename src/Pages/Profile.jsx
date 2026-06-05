import React from 'react'
import { NavLink } from 'react-router-dom'
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
const Profile = () => {

    return (
        <>
            <div>
                <h1 className='text-center'>Profile</h1>
            </div>


            {/* <!-- BREADCRUMB AREA START --> */}
            <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner text-center">
                                <h1 className="ltn__page-title">My Account</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <NavLink to="/">Home</NavLink> 
                                        <li>My Account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- BREADCRUMB AREA END -->

                <!-- WISHLIST AREA START --> */}
            <div className="liton__wishlist-area pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Tab.Container defaultActiveKey="dashboard">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <Nav variant="pills" className="flex-column">

                                            <Nav.Item>
                                                <Nav.Link eventKey="dashboard">
                                                    Dashboard
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="orders">
                                                    Orders
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="downloads">
                                                    Downloads
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="address">
                                                    Address
                                                </Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="account">
                                                    Account Details
                                                </Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </div>

                                    <div className="col-lg-8">
                                        <Tab.Content>

                                            <Tab.Pane eventKey="dashboard">
                                                <p>Hello <strong>UserName</strong> (not <strong>UserName</strong>? <small><a href="login-register.html">Log out</a></small> )</p>
                                                <p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="orders">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Order</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                            <th>Total</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Jun 22, 2019</td>
                                                            <td>Pending</td>
                                                            <td>$3000</td>
                                                            <td><a href="cart.html">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Nov 22, 2019</td>
                                                            <td>Approved</td>
                                                            <td>$200</td>
                                                            <td><a href="cart.html">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td>Jan 12, 2020</td>
                                                            <td>On Hold</td>
                                                            <td>$990</td>
                                                            <td><a href="cart.html">View</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="downloads">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Date</th>
                                                            <th>Expire</th>
                                                            <th>Download</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Carsafe - Car Service PSD Template</td>
                                                            <td>Nov 22, 2020</td>
                                                            <td>Yes</td>
                                                            <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Carsafe - Car Service HTML Template</td>
                                                            <td>Nov 10, 2020</td>
                                                            <td>Yes</td>
                                                            <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Carsafe - Car Service WordPress Theme</td>
                                                            <td>Nov 12, 2020</td>
                                                            <td>Yes</td>
                                                            <td><a href="#"><i class="far fa-arrow-to-bottom mr-1"></i> Download File</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="address">
                                                <div className="ltn__myaccount-tab-content-inner">
                                                    <p>
                                                        The following addresses will be used on the checkout page by default.
                                                    </p>

                                                    <div className="row">
                                                        <div className="col-md-6 col-12 learts-mb-30">
                                                            <h4>
                                                                Billing Address{" "}
                                                                <small>
                                                                    <a href="#">Edit</a>
                                                                </small>
                                                            </h4>

                                                            <address>
                                                                <p>
                                                                    <strong>Alex Tuntuni</strong>
                                                                </p>

                                                                <p>
                                                                    1355 Market St, Suite 900
                                                                    <br />
                                                                    San Francisco, CA 94103
                                                                </p>

                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>

                                                        <div className="col-md-6 col-12 learts-mb-30">
                                                            <h4>
                                                                Shipping Address{" "}
                                                                <small>
                                                                    <a href="#">Edit</a>
                                                                </small>
                                                            </h4>

                                                            <address>
                                                                <p>
                                                                    <strong>Alex Tuntuni</strong>
                                                                </p>

                                                                <p>
                                                                    1355 Market St, Suite 900
                                                                    <br />
                                                                    San Francisco, CA 94103
                                                                </p>

                                                                <p>Mobile: (123) 456-7890</p>
                                                            </address>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="account">
                                                <div className="ltn__myaccount-tab-content-inner mb-50">
                                                    <p>
                                                        The following addresses will be used on the checkout page by default.
                                                    </p>

                                                    <div className="ltn__form-box">
                                                        <form>
                                                            <div className="row mb-50">
                                                                <div className="col-md-6">
                                                                    <label>First Name:</label>
                                                                    <input
                                                                        type="text"
                                                                        name="ltn__name"
                                                                        className="form-control"
                                                                    />
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label>Last Name:</label>
                                                                    <input
                                                                        type="text"
                                                                        name="ltn__lastname"
                                                                        className="form-control"
                                                                    />
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label>Display Name:</label>
                                                                    <input
                                                                        type="text"
                                                                        name="displayName"
                                                                        placeholder="Ethan"
                                                                        className="form-control"
                                                                    />
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <label>Display Email:</label>
                                                                    <input
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder="example@example.com"
                                                                        className="form-control"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <fieldset>
                                                                <legend>Password Change</legend>

                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <label>
                                                                            Current password (leave blank to leave unchanged):
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            name="currentPassword"
                                                                            className="form-control"
                                                                        />

                                                                        <label className="mt-3">
                                                                            New password (leave blank to leave unchanged):
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            name="newPassword"
                                                                            className="form-control"
                                                                        />

                                                                        <label className="mt-3">
                                                                            Confirm new password:
                                                                        </label>
                                                                        <input
                                                                            type="password"
                                                                            name="confirmPassword"
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </fieldset>

                                                            <div className="btn-wrapper mt-4">
                                                                <button
                                                                    type="submit"
                                                                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                                                >
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </div>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Profile
