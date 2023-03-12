import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductByIDQuery } from '../features/APISlice'

export default function Product() {
  const { id } = useParams()

  const { data } = useGetProductByIDQuery(id)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Product</h1>
    </div>
  )
}
