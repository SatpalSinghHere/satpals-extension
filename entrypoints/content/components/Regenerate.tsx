import React from 'react'
import insertArrow from '@/assets/InsertArrow.svg'
import regenerateArrow from '@/assets/RegenerateArrow.svg'

const Regenerate = ({insertResponse}:{insertResponse:Function}) => {

    

    return (
        <div className='ml-auto flex gap-4 mt-2 '>
            <button onClick={()=>{insertResponse()}} className='insertButton text-[#666D80] border-2 border-[#666D80] flex gap-2 justify-center items-center py-1 px-2 rounded-lg'>
                <img className='w-[11px]' src={insertArrow} alt="insertArrow" />  Insert
            </button>
            <button className='text-white bg-[#3B82F6] flex gap-2 justify-center items-center py-1 px-2 rounded-lg'>
                <img className='w-[11px]' src={regenerateArrow} alt="insertArrow" />  Regenerate
            </button>
        </div>
    )
}

export default Regenerate
