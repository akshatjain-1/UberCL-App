import React, {useRef, useState} from 'react'
import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
import axios from 'axios'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const VehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)
  const panelRef = useRef(null)
  const  panelCloseRef = useRef(null)
  const [vehiclePanel, setvehiclePanel]= useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [VehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setwaitingForDriver] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [activeInput, setActiveInput] = useState(null)

  const falsetHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
        height:'70%'
      })
      gsap.to(panelCloseRef.current, {
        opacity:1
      })
    }else{
      gsap.to(panelRef.current, {
        height:0
      })
      gsap.to(panelCloseRef.current, {
        opacity:0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(vehiclePanelRef.current, {
        transform : "translateY(100%)"
      })
    }

  }, [vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(confirmRidePanelRef.current, {
        transform : "translateY(100%)"
      })
    }

  }, [confirmRidePanel])

  useGSAP(function(){
    if(VehicleFound){
      gsap.to(VehicleFoundRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(VehicleFoundRef.current, {
        transform : "translateY(100%)"
      })
    }

  }, [VehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform : "translateY(0)"
      })
    }else{
      gsap.to(waitingForDriverRef.current, {
        transform : "translateY(100%)"
      })
    }

  }, [waitingForDriver])

  const fetchSuggestions = async (input) => {
    if (!input) return setSuggestions([])
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
        params: { input }
      })
      setSuggestions(response.data)
    } catch (error) {
      console.error('Error fetching suggestions:', error)
      setSuggestions([])
    }
  }

  // Update the input handlers
  const handlePickupChange = (e) => {
    setPickup(e.target.value)
    fetchSuggestions(e.target.value)
  }

  const handleDestinationChange = (e) => {
    setDestination(e.target.value)
    fetchSuggestions(e.target.value)
  }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-7' src=" https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        {/* imagr for temp use */}
        <img className='w-full h-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />  

      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h -[30%] p-5 bg-white relative'>

          <h5 ref ={panelCloseRef} onClick={() => {
            setPanelOpen(false)
          }} 
          className='absolute opacity-0 right-6 top-6 text-2xl'><i class="ri-arrow-down-s-line"></i></h5>
          <h4 className='text-2xl font-semibold'> Find a trip</h4>
          <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <div className="line absolute h-16 w-1 left-8 top-[45%] bg-gray-900 rounded-full "></div>
          <input 
          onClick={() =>{
            setPanelOpen(true)
            setActiveInput('pickup')
          }}
          value={pickup}
          onChange={handlePickupChange}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2 mt-6' 
          type="text" 
          placeholder='Pick up location' />
          <input
          onClick={() =>{
            setPanelOpen(true)
            setActiveInput('destination')
          }}
          value={destination}
          onChange={handleDestinationChange}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mb-2 mt-6' 
          type="text" 
          placeholder='Enter your destination' />
          </form>
        </div>
        <div ref= {panelRef} className=' bg-white h-0'>
          <LocationSearchPanel 
          setPanelOpen={setPanelOpen}
          setvehiclePanel={setvehiclePanel}
          suggestions={suggestions}
          setPickup={setPickup}
          setDestination={setDestination}
          activeInput={activeInput}
          />
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  p-3 py-6 px-3 pt-12'>
        <VehiclePanel setConfirmRidePanel = {setConfirmRidePanel} setvehiclePanel = {setvehiclePanel}></VehiclePanel>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  p-3 py-6 px-3 pt-12'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound = {setVehicleFound}/>
      </div>
      <div  ref= {VehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white  p-3 py-6 px-3 pt-12'>
        <LookingForDriver setVehicleFound= {setVehicleFound}/>
      </div>
      <div ref = {waitingForDriverRef} className='fixed w-full z-10 bottom-0  bg-white translate-y-full p-3 py-6 px-3 pt-12'>
        <WaitingForDriver waitingForDriver = {waitingForDriver} />
      </div>
    </div>
  )
}

export default Home