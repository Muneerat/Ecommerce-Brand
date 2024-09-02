import React from 'react'
import FormLabel from '../Components/Form/FormLabel'
import FormInput from '../Components/Form/FormInput'
import Input from '../Components/Form/Input'

const Checkout = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-3/6'>
        <h1>Shipping Address</h1>
        <div className='h-2 w-10'></div>
        {/* <FormLabel > */}
        {/* <FormInput placeholder="Enter fullname" className='border my-3'/>
        <FormInput placeholder="Address"/> */}
        <Input placeholder="Enter Your Fullname" />
        <Input placeholder="Enter your Address" />
      </div>
      <div>Checkout page</div>
    </div>
  )
}

export default Checkout
