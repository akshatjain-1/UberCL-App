import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const CaptainHome = (props) => {

  const [ridePopupPanel, setridePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null)

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(ridePopupPanelRef.current, {
        transform : "translateY(100%)"
      })
    }

  }, [ridePopupPanel])


  return (
    <div className='h-screen'>
    <div className = 'fixed p-3 top-0 flex items-center justify-between w-screen'>
      <img className=' h-4 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to='/home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className='text-lg font-medium ri-logout-box-r-line'></i>
    </Link>
    </div>

    <div className='h-3/5'>
    <img className='w-full h-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />
    </div>

    <div className='h-2/5 p-6'>
    <CaptainDetails />
    </div>
    <div ref = {ridePopupPanelRef}className='fixed w-full translate-y-full z-10 bottom-0  bg-white  p-3 py-6 px-3 pt-12'>
    <RidePopUp setridePopupPanel = {setridePopupPanel}/>
      </div>
</div>
  )
}

export default CaptainHome