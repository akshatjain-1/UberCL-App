import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 clasName= 'p-3 text-center absolute w-full top-0' onClick={() => {
          props.setvehiclePanel(false)
        }}><i className= ' text-gray-300 ri-arrow-down-wide-line'></i></h5>

        <h3 className='text-2xl font-semibold mb-3'> Choose a vehicle</h3>
        <div onClick = {() => {
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className = ' h-12' src='https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png' alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'> 2 mins away </h5>
            <p className='font-normal text-gray-600 text-xs'> Affordable, compact rides </p>

          </div>
          <h2 className='text-xl font-semibold'> Rs.192.20</h2>
        </div>
        <div onClick = {() => {
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className = ' h-12' src='https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png' alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> Uber Auto <span><i className='ri-user-3-fill'></i>3</span></h4>
            <h5 className='font-medium text-sm'> 5 mins away </h5>
            <p className='font-normal text-gray-600 text-xs'> Affordable, auto rides </p>

          </div>
          <h2 className='text-xl font-semibold'> Rs.1.20</h2>
        </div>
        <div onClick = {() => {
            props.setConfirmRidePanel(true)
        }} className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3  items-center justify-between'>
          <img className = ' h-12' src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png' alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'> Uber Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
            <h5 className='font-medium text-sm'> 2 mins away </h5>
            <p className='font-normal text-gray-600 text-xs'> Affordable, motorcycle rides </p>

          </div>
          <h2 className='text-xl font-semibold'> Rs.67</h2>
        </div>
    </div>
  )
}

export default VehiclePanel