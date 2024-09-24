import React from 'react'

const Prompt = ({text}:{text:string}) => {
  return (
    <div className='p-2 mb-2 text-[#666D80] bg-[#DFE1E7] ml-auto rounded-lg min-w-[40%] max-w-[60%]'>
      {text}
    </div>
  )
}

export default Prompt
