import React, { useContext } from 'react'
import { AppContext } from '../Contexts/AppContent';

export default function RemoveItem({product}) {
    const {removeItem} = useContext(AppContext);
  return (
    <div>
        <button onClick={() => removeItem(product)}>Remove </button>
    </div>
  )
}
