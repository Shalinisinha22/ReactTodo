import React from 'react'
import Checkout from './Checkout'
import { useState } from 'react'
function CartPage(props) {
    const [showCheckoutPage,setShowCheckoutPage]=useState(false)
  return (
    <div>
        {
            showCheckoutPage?
            <Checkout userNumber={props.userNumber}></Checkout>
            :
            (
<>
 <h1>
        This is cart page
      </h1>
      <button onClick={()=>props.setShowCartPage(!props.showCartPage)}>Back</button>
      <button onClick={()=> setShowCheckoutPage(!showCheckoutPage)}>proceed to Checkout</button>
</>
            )
 
        }
    
    </div>
  )
}

export default CartPage
