import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

  const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ userData, setUserData ] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
      setUserData({
        fullName : {
          firstName : firstName,
          lastName : lastName
        },
        email : email,
        password : password
      })
  
      console.log(userData);
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/non_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <h3 className='text-xl font-medium mb-2'> Captain's Name</h3>
            <div className='flex gap-4 mb-5'>
              <input
                required 
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder: text-base'
                type="text" 
                placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }} 
                />
                <input
                required 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder: text-base'
                type="text" 
                placeholder='Last Name' 
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                />
            </div>
            <h3 className='text-lg font-medium mb-2'>Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />
            <h3 className='text-xl font-medium mb-2'> Please enter your Password</h3>
            <input 
            required 
            
            className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder: text-base'
            type="password" 
            placeholder='password' 
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            />
            <button className='bg-[#111] text-white font-bold mb-5 rounded px-4 py-2  w-full text-lg placeholder: text-base'>Login</button>

        </form>
        <p className='text-center'> Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
        </div> 
        <div>
            <p className='text-[10px] leading-tight'>By proceeding you consent to get calls, WhatsApp or SMS messages, including by automated means,  by Uber and its affiliates to the number provided.</p>
        </div>
        
    </div>
  )
}

export default CaptainSignup