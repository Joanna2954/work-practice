import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from './firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'

function SignupWithGoogle() {
    const nav = useNavigate()

    function handleSignup(){
        signInWithPopup(auth,provider)
        .then(res => {
            console.log(res);
            nav("/bmical")
        })
    }
  return (
    <div>
    <Button onClick={handleSignup}>signup with google</Button>
    
    </div>

   
  )
}

export default SignupWithGoogle