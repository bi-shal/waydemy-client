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

const Header = () => {
  const {user,logOut} = useContext(MyContext)
  console.log(user);

  const loginOut =()=>{
    logOut()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));
  }



    return (
<div>
          
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='p-4'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
                  <Button className='me-3' variant="dark"><Link to={'/courses'} style={{textDecoration:'none', color:'white'}}>Courses</Link></Button>
                  <Button className='me-3' variant="dark"><Link to={'/faq'} style={{textDecoration:'none', color:'white'}}>Faq</Link></Button>
                  <Button className='me-3' variant="dark"><Link to={'/blog'} style={{textDecoration:'none', color:'white'}}>Blog</Link></Button>           
          </Nav>
          <Nav>
            
            <Nav>
            {
              user?.uid ?
              <>
              <Button  onClick={loginOut} variant="outline-light"><Link to='/register' style={{textDecoration:'none',  color:'gray'}} className=''>Sign out</Link></Button>
              {/* <span className='' style={{color:'white', marginTop:'5px'}}>{user?.displayName}</span> */}
              
              
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
              <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>  
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