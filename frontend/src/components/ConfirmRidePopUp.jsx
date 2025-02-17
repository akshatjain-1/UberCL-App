import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('')


    const submitHaandler = (e) => {
        e.preventDefault()
    }

  return (
    <div>
    <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
             props.setConfirmridePopupPanel(false)
         }}><i className="text-2xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Confirm the ride to start trip</h3>
         <div className='flex items-center p-4 rounded-lg bg-yellow-500 justify-between mt-4'>
             <div className='flex items-center gap-3 ' >
                 <img src='https://tse3.mm.bing.net/th?id=OIP.YhFLPjx8pbateY5GygJKDQHaLG&pid=Api&P=0&h=180' alt='driver' className=' h-12 w-12 rounded-full object-cover' />
                 <h2 className='text-lg font-medium p-2'> Akshat jain </h2>
             </div>
             <h5 className='text-lg font-semibold'> 2.2km </h5>
         </div>
       
         <div className='flex gap-2 justify-between flex-col items-center'>
             <div className='w-full mt-5'>
                 <div className='flex items-center gap-5 p-3 border-b-2'>
                     <i className="ri-map-pin-user-fill"></i>
                     <div>
                         <h3 className='text-lg font-medium'>562/11-A</h3>
                         <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                     </div>
                 </div>
                 <div className='flex items-center gap-5 p-3 border-b-2'>
                     <i className="text-lg ri-map-pin-2-fill"></i>
                     <div>
                         <h3 className='text-lg font-medium'>Bengaluru, Karnatak</h3>
                         <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                     </div>
                 </div>
                 <div className='flex items-center gap-5 p-3'>
                     <i className="ri-currency-line"></i>
                     <div>
                         <h3 className='text-lg font-medium'></h3>
                         <p className='text-sm -mt-1 text-gray-600'> Rs.193.90 Cash Cash</p>
                     </div>
                 </div>
             </div>
             <div className='mt-6 w-full'>
                <form className='' onSubmit={(e) =>{
                    submitHaandler(e)
                }}>
                    <input value = {otp} onChange= {() => setOtp(e.target.value)} type = 'text'  className='bg-[#eee] px-6 py-4 text-base justify-center font-medium flex rounded-lg w-full mb-2 mt-6' placeholder='Enter OTP' />
                <Link to='/captain-riding' className='bg-green-500 font-medium px-12 py-2 text-base flex justify-center rounded-lg w-full mb-2 mt-5'> Confirm </Link>

                <button onClick={() => {
                    props.setConfirmridePopupPanel(false)
                    props.setridePopupPanel(false)
                }} className='w-full mt-2 bg-red-500 text-white-700  font-medium p-2 rounded-lg'> Cancel </button>
                </form>
             </div>
         </div> 
 </div>
  )
}

export default ConfirmRidePopUp