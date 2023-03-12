import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector((state) => state.cart.value)

  return (
    <div>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
      <h1>Cart</h1>
    </div>
  )
}
