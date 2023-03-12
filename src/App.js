import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Product from './components/Product'

export default function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/:id'
          element={<Product />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
      <h1>App</h1>
    </div>
  )
}
