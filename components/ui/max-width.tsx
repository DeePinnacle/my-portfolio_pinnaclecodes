import React, { ReactNode } from 'react'
import { cn } from "@/lib/utils"
interface wrapperProps {
    className?: string,
    children: ReactNode
}

const MaxWidthWrapper = ({ className, children }:wrapperProps) => {
  return (
    <div className={cn('w-full max-w-6xl', className)}>
      { children }
    </div>
  )
}

export default MaxWidthWrapper