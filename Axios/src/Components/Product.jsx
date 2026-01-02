import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Product = () => {
    const [productList,setProductList]=useState([])
//promise
    // const fetchProducts= ()=>{
    //     const resposne= axios.get("https://dummyjson.com/products?limit=10")
    //     resposne.then((data)=>{
    //         console.log(data.data.products)
    //         setProductList(data.data.products)
    //     }).catch((err)=>{
    //         console.log(err.message)
    //     })
    // }

   //async await
      const fetchProducts= async()=>{
        try{
        const response= await axios.get("https://dummyjson.com/products?limit=10")
         if(response.data.products){
            setProductList(response.data.products)
         }
        console.log(response.data.products)

        }
        catch(err){
            console.log(err.message)
        }
       
    } 
    
    useEffect(()=>{
        fetchProducts()
    },[])

  

  return (
    <div>
      <h1>Products</h1> 
      {
        productList.length==0?
        <h1>Loading......</h1>
        :
        productList.map((product,id)=>{
         return (
           
              <div key={id} className='product-card'>
                <h1>{product.title}</h1>
                 {/* <button onC>view products</button> */}

              </div>
      
         )
        })
        
      }
    </div>
  )
}

export default Product
