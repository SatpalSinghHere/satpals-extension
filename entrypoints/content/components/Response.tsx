import React from 'react'

const Response = ({text}:{text:string}) => {
  return (
    <div className='p-4 mb-2 text-[#666D80] bg-[#DBEAFE] rounded-lg min-w-[40%] max-w-[70%]'>
      {text}
    </div>
  )
}

export default Response
