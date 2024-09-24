import React from 'react'
import magicWandImage from '@/assets/Frame.png'

const MagicWand= () => {
  return (
    <img className="wandImage w-[20px] self-end cursor-pointer absolute bottom-0 right-0" src={magicWandImage} alt="magicWand" />
  )
}

export default MagicWand
