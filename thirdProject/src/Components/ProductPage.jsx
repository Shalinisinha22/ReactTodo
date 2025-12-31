import React from 'react'
import CartPage from './CartPage'
import { useState } from 'react'
function ProductPage(props) {
    const [showCartPage,setShowCartPage]=useState(false)

  return (
    <div>
   

      {
        showCartPage ?
        <CartPage userNumber={props.userNumber} setShowCartPage={setShowCartPage} showCartPage={showCartPage}></CartPage>
        :
        (
            <>
               <h1>This is product page</h1>
            <h2>product 1</h2>
         <button onClick={()=>setShowCartPage(!showCartPage)}>Add to cart</button>
    
            </>
         )

      }

      
  
    </div>
  )
}

export default ProductPage
