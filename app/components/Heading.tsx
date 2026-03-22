// @ts-nocheck

import React, { useRef } from 'react'




const Heading = () => {

    const pinProject = useRef();

  return (
    <div className='text-3xl mt-25 text-white font-semibold league-gothic ' ref={pinProject} >My Selected Projects</div>    
  )
}

export default Heading