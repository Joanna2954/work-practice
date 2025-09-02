import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebaseConfig'

const Createsign = () => {
  let navi = useNavigate()

  let [user, setUser] = useState({
    email: '', 
    password: ''
  })

  function togetvalue(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  function sumbit(e) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(res => {
        console.log(res);
      navi('/enterlogin', { state: user })
      })
     
  }

  return (
    <div>
      <form onSubmit={sumbit}>
        <input placeholder='Enter Email' type='text' name='email' value={user.email} onChange={togetvalue} /><br /><br />
        <input placeholder='Enter Password' type='password' name='password' value={user.password} onChange={togetvalue} /><br /><br />
        <Button type="submit">Create Account</Button>
      </form>
    </div>
  )
}

export default Createsign