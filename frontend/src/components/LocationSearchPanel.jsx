import React from 'react'
import axios from 'axios'

const LocationSearchPanel = ({ setPanelOpen, setvehiclePanel, suggestions, setPickup, setDestination, activeField }) => {
  return (
    <div>
      {suggestions.map((suggestion, idx) => (
        <div 
          key={idx} 
          onClick={() => {
            if (activeField === 'pickup') {
              setPickup(suggestion)
            } else {
              setDestination(suggestion)
            }
            setPanelOpen(false)
            if (activeField  === 'destination') {
              setvehiclePanel(true)
            }
          }}
          className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
        >
          <h2 className='bg-[#eee] h-10 flex items-center justify-center w-14 rounded-full'>
            <i className='ri-map-pin-fill'></i>
          </h2>
          <h4 className='font-medium'>{suggestion}</h4>
        </div>
      ))}
    </div>
  )
}

export default LocationSearchPanel