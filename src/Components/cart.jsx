import React from 'react'

export default function Cart() {
  return (
    <div className='m-5'>
        <h2 className='py-4'>Cart</h2>
        <div className='flex justify-between shadow- shadow-2xl bg-white '>
            <h2>Product</h2>
            <h2>price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
        </div>
    </div>
  )
}
