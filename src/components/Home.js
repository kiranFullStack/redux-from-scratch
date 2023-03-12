import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../features/APISlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice'

export default function Home() {
  const { data } = useGetProductsQuery()

  const dispatch = useDispatch()

  return (
    <div>
      <Link to='/cart'>cart</Link>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Home</h1>

      {data?.map((item) => (
        <div key={item.id}>
          <h1>{item.id}</h1>
          <Link to={`/${item.id}`}>Buy</Link>
          <button onClick={() => alert(item.id)}>❤️</button>
          <button
            onClick={() =>
              dispatch(addToCart({ title: item.title, id: item.id }))
            }>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}
