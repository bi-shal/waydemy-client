import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
//Bootstrap-form-
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { MyContext } from '../../../Context/AuthContext/Authcontext';




const Login = () => {
  const providerr = new GoogleAuthProvider();
  const gitProvider =  new GithubAuthProvider();
const {signInUser,providerLogin,gitSignIn,setUser} = useContext(MyContext);
// console.log(user);

const navigate = useNavigate();


const location = useLocation()
// console.log(location);


const from = location.state?.from?.pathname || '/';
console.log(from)


const handleLogin = (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  
  signInUser (email,password)
  .then(result => {
    const user = result.user;
    setUser(user)
    console.log(user);
  })
  .catch(error => console.error(error));
  
}

//googleSignin
const handleGoogleSignIn = () => {
  providerLogin(providerr)
  .then(result => {
    const user = result.user;
    console.log(user);

        // form.reset()
        navigate(from,{replace:true})
        // setError('')
  })
  .catch(error => console.error(error));
}


//gitSignIn
const handleGitSignIn= () =>{
  gitSignIn(gitProvider)
  .then(result => {
    const user = result.user;
    setUser(user)
    console.log(user);
  })
  .catch(error => console.error(error))
}





    return (
        <div className='mt-4'>
            <div className='mt-4'> 
                <h1 className='mx-5 mb-5'>Log in to your Academy account ...</h1>
            </div>
            <Form 
            onSubmit={handleLogin}
            className=' border p-5  mx-auto w-50'>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label  >Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>

      
      <Form.Group className="mb-3" >
        {/* <Form.Check type="checkbox" label="Check me out" /> */}
        
      </Form.Group>
      <Button className='w-100 my-3' variant="outline-dark" type='submit'>Log In</Button>
      

<ButtonGroup vertical className='w-100 mt-2'>
            <Button onClick={handleGoogleSignIn}  variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Login With Google</Button>
            <Button onClick={handleGitSignIn} variant="outline-dark" className='mb-2'><FaGithub></FaGithub> Login With GitHub</Button>      
        </ButtonGroup>


      <div>
        <p className='mb-0'>Don't have an account ? <Link to='/register'> Sign up</Link></p>
        <p className='mt-0'>Log in with your organization</p>
      </div>

    </Form>
        </div>
    );
};

export default Login;


