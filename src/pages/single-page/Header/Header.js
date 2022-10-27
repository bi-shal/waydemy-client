import React from 'react';
//bootstrap--import
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { MyContext } from '../../../Context/AuthContext/Authcontext';
import { Image } from 'react-bootstrap';
import { FaImages } from 'react-icons/fa';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = () => {
  const {user,logOut} = useContext(MyContext)
  // console.log(user);

  const loginOut =()=>{
    logOut()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));
  }



  const nameShow = () => {
    toast(user?.displayName);
  }

    return (
<div>
          
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-4'>
      <Container>
        <Link className='' style={{textDecoration:'none', color:'yellow', fontSize:'20px'}} to='/'><p style={{fontWeight:'bolder'}}>Way Demy</p></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
                  <Button className='me-3' variant="dark"><Link to={'/'} style={{textDecoration:'none', color:'white',fontWeight:'bolder'}}>Home</Link></Button>
                  <Button className='me-3' variant="dark"><Link to={'/courses'} style={{textDecoration:'none', color:'white',fontWeight:'bolder'}}>Courses</Link></Button>
                  <Button className='me-3' variant="dark"><Link to={'/faq'} style={{textDecoration:'none', color:'white',fontWeight:'bolder'}}>Faq</Link></Button>
                  <Button className='me-3' variant="dark"><Link to={'/blog'} style={{textDecoration:'none', color:'white',fontWeight:'bolder'}}>Blog</Link></Button>           
          </Nav>
          <Nav>
            
            <Nav>
            {
              user?.uid ?
              <>
              <Button  onClick={loginOut} variant="outline-light"><Link to='/register' style={{textDecoration:'none',  color:'gray'}} className=''>Sign out</Link></Button>
              </>
              :
              <>
              <Button className='me-3' variant="outline-dark"><Link to='/login' style={{textDecoration:'none',  color:'white'}} className=''>Login</Link></Button>
            <Button variant="outline-light"><Link to='/register' style={{textDecoration:'none',  color:'gray'}} className=''>Sign up</Link></Button>
              </>
            }
            </Nav>

           <>
           <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL? 
              <>
              <Button style={{marginLeft:'20px'}} variant='outline-secondary' onFocus={nameShow}><Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>  </Button>
              <ToastContainer />
              </>
              : <FaImages></FaImages>
            }
            </Nav.Link>
           </>
     
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
    );
};

export default Header;