import React from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <h3 className='text-xl font-medium mb-2'> What's your Name</h3>
            <input
             required 
             
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base'
             type="email" 
             placeholder='email@example.com' 
             />
            <h3 className='text-xl font-medium mb-2'> PLease enter your Password</h3>
            <input 
            required 
            
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base'
            type="password" 
            placeholder='password' 
            />
            <button className='bg-[#111] text-white font-bold mb-7 rounded px-4 py-2  w-full text-lg placeholder: text-base'>Login</button>

        </form>
        <p className='text-center'> New Here ? <Link to='/signup' className='text-blue-600'>Create New Account</Link></p>
        </div> 
        <div>
            <Link to = '/captain-login' 
            className='bg-[#267] flex item-center justify-center text-white font-bold mb-7 rounded px-4 py-2  w-full text-lg placeholder: text-base'> Sign in as captain</Link>
        </div>
        
    </div>
  )
}

export default UserSignup