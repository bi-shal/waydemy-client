import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//bootstrap
import './ShowAll.css'

const ShowAll = ({datas}) => {
    // console.log(datas)
    const {img,title,category_id} = datas;

    return (
      
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
            <p className='product-name'>{title}</p>
            
          </div>
          <Button variant="dark" className='btn-cart py-2 text-white' ><Link  to={`/allnews/${category_id}`} style={{textDecoration:'none',  color:'gray',color:'white'}} className=''>Detail</Link></Button>
         
        </div>
        
    );
};

export default ShowAll;