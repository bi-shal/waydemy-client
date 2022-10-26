import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//bootstrap
import './ShowAll.css'

const ShowAll = ({datas}) => {
    // console.log(datas)
    const {img,title,category_id} = datas;


const handleAddToCart = () =>{

}


    return (
      
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
            <p className='product-name'>{title}</p>
            <p>Price: ${}</p>
            <p><small>Seller: {}</small></p>
            <p><small>Ratings: {} stars</small></p>
          </div>
          <Button variant="dark" className='btn-cart py-2' ><Link  to={`/allnews/${category_id}`} style={{textDecoration:'none',  color:'gray'}} className=''>Detail</Link></Button>
          {/* <button onClick={() => handleAddToCart()} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                
            </button> */}
        </div>
        
    );
};

export default ShowAll;