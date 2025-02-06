import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);

  //sampe array for location
  const locations =  [
    'Whatever the address 1',
    'Whatever the address 2',
    'Whatever the address 3',
    'Whatever the address 4',
  ]
  return (
    <div>
      {/* this is sampe data */}
      {
        locations.map(function(elem, idx){
          return <div keu={idx} onClick = { () => {
            props.setvehiclePanel(true)
            props.setPanelOpen(false)
          }}className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg- [#eee] h-10 flex items-center justify-center w-14 rounded-full'><i className='ri-map-pin-fill'></i></h2>
            <h4 className='font-medium'> {elem} </h4>
        </div>
        })
      }
      
      
    </div>
       
    
  )
}

export default LocationSearchPanel