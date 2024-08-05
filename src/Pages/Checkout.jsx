import React from 'react'
import FormLabel from '../Components/Form/FormLabel'
import FormInput from '../Components/Form/FormInput'

const Checkout = () => {
  return (
    <div>
      <div>
        <h1>Shipping Address</h1>
        <div className='h-2 w-10'></div>
        {/* <FormLabel > */}
        <FormInput placeholder="Enter fullname" className='border my-3'/>
        <FormInput placeholder="Address"/>
      </div>
      <h2>Checkout page</h2>
    </div>
  )
}

export default Checkout
