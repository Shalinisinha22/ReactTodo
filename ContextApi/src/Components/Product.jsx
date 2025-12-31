import React, { useContext } from 'react'
import { LanguageContext } from '../Context/LanguageContext'

function Product() {
    const {lang}=useContext(LanguageContext)
  return (
    <div>
      <h1>Product page language {lang}</h1>
    </div>
  )
}

export default Product
