import React, { useState, useEffect } from 'react';
import instance from '../axios/axiosConfig';

const Catalog = ()=>{

    const [product, setProduct ] = useState([])

  let fetchData = ()=>{
    instance.get("products").then(res=>{
      const product = res.data
      setProduct(product)
      console.log(product)
    })
   }

    useEffect(()=>{
      fetchData()
    },[])
    console.log(product)
    let img_arr = []
    product.forEach((prod)=>{
        img_arr.push(prod.image)
    })

    console.log(img_arr)

    return (
      <div >
          <div className="row" >
            {
                product.slice(0,5).map((prod,index)=>(
                    <div className="col-md catalog_container">
                        <img className="catalog_image" src={prod.image}/>
                        <h4>{prod.title}</h4>
                        <h5>price: {prod.price}</h5>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default Catalog;