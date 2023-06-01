import React from "react"
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <>

      <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
        <div class="sidenav-header">
          <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
          <a class="navbar-brand m-0" href="/Dashboard" target="_blank">
            <img src="./assets/img/logo-ct-dark.png" class="navbar-brand-img h-100" alt="main_logo" />
            <span class="ms-1 font-weight-bold">Evabamar</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
        <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="./Dashboard">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="./Orderdetails">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-calendar-grid-58 text-warning text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Order details</span>
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link " href="./pages/billing.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Customer</span>
              </a>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/Customerdetails">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Customer </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Managecustomers">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Manage Customer</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Productdetails">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Product Details</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewproducts">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card text-success text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">View Products</span>
              </Link>
            </li>
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/adminProfile">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                </div>
                <span className="nav-link-text ms-1">Profile</span>
              </Link>
              {/* <Link className="nav-link" to="/AdminProfile">Go to Profile

                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
                </Link> */}
            </li>

            <li class="nav-item">
              <a class="nav-link " href="./pages/sign-up.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-collection text-info text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="sidenav-footer mx-3 ">
          <div class="card card-plain shadow-none" id="sidenavCard">
            <img class="w-50 mx-auto" src="./assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration" />
            <div class="card-body text-center p-3 w-100 pt-0">
              <div class="docs-info">
                <h6 class="mb-0">Send text</h6>
                <p class="text-xs font-weight-bold mb-0">Want to send an sms ?  </p>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-dark btn-sm w-100 mb-3"><b>Click me</b></a>
        </div>
      </aside>


    </>



  )
}