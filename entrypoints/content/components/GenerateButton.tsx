import React from 'react'
import arrow from '@/assets/Arrow.png'

const GenerateButton = ({addPrompt}:{addPrompt:Function}) => {
    return (
        <button onClick={()=>{addPrompt()}} className="text-white bg-[#3B82F6] flex gap-2 justify-center items-center py-1 px-2 rounded-lg ml-auto">
            <img className='w-[15px]' src={arrow} alt="arrow" /> Generate
        </button>
    )
}

export default GenerateButton
