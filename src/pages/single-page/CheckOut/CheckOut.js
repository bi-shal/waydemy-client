import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const CheckOut = () => {
    const checked = useLoaderData()
    console.log(checked);
   
    return (
        <div  className='m-5' >
            <>
      <Card >
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
            
       
      </Card>
      
    </>
    </div>
  );
       
    
};

export default CheckOut;