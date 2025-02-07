import React from 'react'
import { Link } from 'react-router-dom'

const Riding = (props) => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='right-2 top-2 fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className='text-lg font-medium ri-home-5-line'></i>
        </Link>

        <div className='h-1/2'>
        <img className='w-full h-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />
        </div>

        <div className='h-1/2 p-4'>
        <div className = 'flex items-center justify-between'>
             <img className='h-10 ' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
             <div className= 'text-right'>
                <h2 className='text-xl font-medium '> Sarthak</h2>
                <h4 className='text-l font-semibold -mt-1 -mb-1'> MP04 33 44</h4>
                <p className='text-sm text-gray-500'> Maruti Swift Dzire  </p>
             </div>
             </div>   
             
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>Bengaluru, Karnataka</h3>
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
            </div>
            <div className='p-3'> {/** Payment Button, can remove this div */}
            <button className='w-full bg-green-600 text-white font-semibold p-2'>Make a Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Riding