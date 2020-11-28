import React, { useState, useEffect } from 'react';
import instance from '../axios/axiosConfig';

const Carousel = ()=>{
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
 
    const getDeatils = ()=>{
      console.log(`clicked ${product.id}`)
    }
    
     return(
         <div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{margin:"auto",width:1000,height:400}}>
  
            <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              {
                product.map((pd,index)=>(
                  <li data-target="#myCarousel" data-slide-to={index+1}></li>
                ))
              }
            </ol>


          <div className="carousel-inner">
            <div className="item active">
             <img src="https://4.imimg.com/data4/QC/XV/MY-10093329/college-bag-500x500.jpg" style={{margin:"auto",width:400,height:200}}/>
             </div>
            {
              product.map((prod)=>(
                <div className="item">
                    <img src={prod.image} style={{width:400,height:200}} onClick={getDeatils}/>
                    {prod.description}
                 </div>
              ))
            }
          </div>
        
  
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


      </div>
     )
}

export default Carousel;