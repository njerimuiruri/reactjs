import React from "react"

import ErrorPage from "./Pages/ErrorPage"

import Hero from "./Pages/Hero"
import AdminProfile from "./Pages/AdminProfile"
import Customerdetails from "./Pages/Customerdetails"
import Orderdetails from "./Pages/Orderdetails"
import Managecustomers from "./Pages/Managecustomers"
import Productdetails from "./Pages/Productdetails"
import ViewProducts from "./Pages/ViewProducts"



import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} >
      <Route path="/" element={<Hero />} />

      <Route path="/Dashboard" element={<Hero />} />
      <Route path="/adminProfile" element={<AdminProfile />} />
      <Route path="/customerdetails" element={<Customerdetails />} />
      <Route path="/Orderdetails" element={<Orderdetails />} />
      <Route path="/ManageCustomers" element={<Managecustomers />} />
      <Route path="/Productdetails" element={<Productdetails/>} />
      <Route path="/ViewProducts" element={<ViewProducts/>} />




    </Route>

  )
)

export default function App() {
  return (
    <RouterProvider router={router} />

  )
}