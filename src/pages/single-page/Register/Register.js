import React, { useContext } from 'react';
//Bootstrap-form-
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//router-dom
import { InputGroup } from 'react-bootstrap';
import { MyContext } from '../../../Context/AuthContext/Authcontext';
import { useState } from 'react';




const Register = () => {
  const {createUserEmailAndPassword,updateKoroTomarProfile} = useContext(MyContext);

const [error,setPasswordError] = useState('')

    const handleSubmit =(event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;        
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photoURL);


//createUserEmailAndPassword#######
createUserEmailAndPassword(email,password)
.then(result =>{
  const user = result.user;
  console.log(user);
  handleUpdateUserprofile(name,photoURL)
})
.catch(error => {
  console.error(error)
  setPasswordError(error.message)
});

}
//update profile----
const handleUpdateUserprofile = (name,photoURL) =>{
  const profile = {
      displayName:name,
      photoURL:photoURL
  }
  updateKoroTomarProfile(profile)
  .then(result => {
      const user = result?.user;
      console.log(user);
  })
  .catch(error => console.error(error))
}




return (
  <div className='m-4'>
        <div className='m-5'>
           <h1>Sign up and start learning ...</h1>
        </div>
            <Form onSubmit={handleSubmit} className=' border p-3 w-50 mx-auto'>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="name" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>


            <Form.Label htmlFor="basic-url">Photo URL</Form.Label>
      <InputGroup className="mb-3">
            <Form.Control  name='photoURL' type='text' placeholder='Photo Url' />
      </InputGroup>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />
                <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
      
      <p className='text-danger'>{error}</p>
      <Button className='w-100' variant="outline-dark" type='submit'>Sign up</Button>
    </Form>
  </div>
    );
};

export default Register;