import React from 'react';
import { useState } from "react";
import { Button } from './button';


type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode;
  };

const CustomTabs = ({ tabs: propsTabs }:{ tabs: Tab[]}) => {
    const [active, setActive] = useState<Tab>(propsTabs[0]);
     console.log(active)
  return (
    <div>
        <div className="flex flex-row flex-wrap items-center gap-4">
            {
                propsTabs.map((tab, idx)=>(
                    <Button 
                       key={tab.value} 
                       className = {`bg-transparent rounded-full px-4 py-2 text-[gray] outline-none border-none shadow-none hover:bg-transparent md:text-xl ${active.value === tab.value ? "bg-gray-200 text-black" : "" }`}
                       onClick={()=>{
                        setActive(propsTabs[idx])
                    }}>{tab.title}</Button>
                ))
            }
        </div>
        {/* content display */}
        <div
          className="my-8">
            {active.content}
        </div>
    </div>
  )
}

export default CustomTabs