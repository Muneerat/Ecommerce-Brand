import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContent';

export default function RemoveItem({product}) {
    const {removeItem} = useContext(AppContext);
  return (
    <div>
        <button className='bg-red-600 text-white mx-8 p-1 rounded-sm' onClick={() => removeItem(product)}>Remove </button>
    </div>
  )
}
