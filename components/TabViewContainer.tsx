"use client"
import React, { FC } from 'react'
interface tabViewProps {
    children: React.ReactNode
}

const TabViewContainer: FC<tabViewProps> = ({ children }) => {
  return (
    <div 
      className='w-full overflow-hidden relative rounded-2xl p-3 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[gray] to-black'>
        { children }
    </div>
  )
}

export default TabViewContainer