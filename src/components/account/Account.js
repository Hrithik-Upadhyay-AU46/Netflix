import React, { useState } from 'react'
import './Account.css'
import { useNavigate } from 'react-router-dom'
const Account = () => {
  const naviagte = useNavigate()
  const[account , setAccount] = useState('login')
  const toggleAccount=()=>{
    account === 'signup' ? setAccount('login') : setAccount('signup')
  }
    const signupData = async()=>{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
      let sign = await fetch("https://netflixappbackend.onrender.com/signup",{
        headers:{
          'content-Type':'application/json'
        },
        method:"POST",
        body:JSON.stringify({
          name:name,
          email:email,
          password:password
        })
      })
      let signD = await sign.json()
      console.log(signD)
      if(signD.status==="success"){
        
        alert("SIgnUp seccessfully")
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('password').value = ""
        setAccount('login') 
      }
     
    
   }


   const loginData= async()=>{
    let email = document.getElementById('logemail').value
    let password = document.getElementById('logpassword').value
    let log = await fetch('https://netflixappbackend.onrender.com/login',{
      headers:{
        "content-Type" : 'application/json'
      },
      method:'POST',
      body:JSON.stringify({
        email:email,
        password:password
      })
    })  
    let logD = await log.json()
    


    if(logD.status==="success"){ 
      // localStorage.setItem('userID', JSON.stringify(logD.user._id))
      document.getElementById('logemail').value = ""
      document.getElementById('logpassword').value = ""
      
      // let iid = await fetch('http://localhost:8888/id/save',{
      //   headers:{
      //     "content-Type" : 'application/json'
      //   },
      //   method:'POST',
      //   body:JSON.stringify({
      //     userI: logD.user._id
      //   })
      // })
      naviagte("/home")
    }

    
   }

  return (
    <div className='logB'>
      <div className='shadow'></div>
      <div className='account'>
       {
        account === 'login' ?
        <div className='login'>
        <h1>Sign in</h1>
        <div className='logInput'>
          <input type='email' id='logemail' name='email' placeholder='Email' />
          <input type='password' id='logpassword' name='email' placeholder='Password' />
        </div>
        <button className='in' onClick={loginData}>Sign In</button>
        <div className='uposite'><button onClick={toggleAccount}>Sign Up</button></div>
      </div>
      :
      <div className='login'>
      <h1>Sign in</h1>
      <div className='logInput'>
      <input type='text' id='name' name='namw' placeholder='Name' />
        <input type='email' id='email' name='email' placeholder='Email' />
        <input type='password' id='password' name='email' placeholder='Password' />
      </div>
      <button className='in' onClick={signupData}>Sign Up</button>
      <div className='uposite'><button onClick={toggleAccount}>Sign in</button></div>
    </div>
       }
        <div className='footer'>
          <h4>New to Netflix?</h4>
          <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </div>

      </div>
    </div>
  )
}

export default Account