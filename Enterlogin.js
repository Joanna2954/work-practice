import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

const Enterlogin = () => {
  
  const [check, setCheck] = useState({
    email: '',
    password: ''
  });

  function togetvalues(e) {
    setCheck({ ...check, [e.target.name]: e.target.value });
  }

  function submits(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, check.email, check.password)
      .then(res => {
        console.log(res);
        alert('login successful');
      })
      .catch(err => {
        console.log(err);
        alert('login failed');
      });
  }

  return (
    <div>
      <form onSubmit={submits}>
        <input placeholder='Enter Email' type='text'  name='email'  value={check.email}  onChange={togetvalues} /><br /><br />
        <input placeholder='Enter Password' type='password'name='password'  value={check.password}  onChange={togetvalues}/><br /><br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Enterlogin