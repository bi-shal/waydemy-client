import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
const Detail = () => {
    const detail = useLoaderData();
    // console.log(detail);

    return (
        <div className='mt-5'>
            <>
      <Card className='w-75 mx-auto'>
        <Card.Img variant="top" src={detail.img} className='border p-3' />
        <Card.Body>
          <Card.Text>
            {detail.details}
          </Card.Text>
          <Link to={`/check/${detail.id}`}><Button variant="dark" className='w-100'>Premium</Button></Link>
          {/* <Button variant="dark" className='w-100' ><Link  to={`/allnews/${detail.category_id}`} style={{textDecoration:'none',  color:'gray'}} className=''>Detail</Link></Button> */}
        </Card.Body>
      </Card>
     
      
    </>
        </div>
    );
};

export default Detail;