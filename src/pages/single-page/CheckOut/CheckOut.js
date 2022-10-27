import React, { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Document, Page } from 'react-pdf';
const CheckOut = () => {
    const checked = useLoaderData()
    console.log(checked)
    const ref = createRef()
    return (
        <div className='m-5' ref={ref}>
            <>
      <Card>
        <Card.Body>
          <Card.Text>
           <h1>{checked.title}</h1>
           <p>{checked.details}</p>

           <p>Badge : {checked.rating.badge}</p>
           <br />
           <p>Rating : {checked.rating.number}</p>
           <br />
           <p>Price : $ {checked.price}</p>
           <br />
           <p>Duration : {checked.duration} Hours</p>

          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={checked.img} />
        <Button variant="dark" className='btn-cart py-2 text-white mt-3' ><Link  to={`/`} style={{textDecoration:'none',  color:'gray',color:'white',marginTop:'10px'}} className=''>Back To Home</Link></Button>
        <div targetRef={ref} filename='somefile.pdf'>
            {({toPdf}) => (
                <Button onClick={toPdf}>
                Download Pdf
            </Button>
            )}
            
        </div>
      </Card>
    </>
    </div>
  );
       
    
};

export default CheckOut;