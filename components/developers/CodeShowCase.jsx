"use client"

import ShikiHighlighter from '@/hook/shikiHighlighter';
import { codeSnipped as items } from '@/lib/data';
import React, { useState } from 'react'


export default function CodeShowCase() {
  const [activeTab, setActiveTab] = useState(items[0].label);

  const activeItem = items.find((item) => item.label == activeTab);
  
  return (
    <div className="h-full w-full bg-black/90 p-6 flex gap-5 flex-col">
      <div className='flex text-white/90 gap-10'>
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => setActiveTab(item.label)} 
            className={`cursor-pointer text-sm font-medium pb-1 hover:text-white/90 hover:border-b-2 hover:border-white/90 ${item.label == activeTab ? `text-white/90 border-b-2 border-white/90` : `text-gray-300`}`}
          > 
            {item.label} 
          </div>
        ))}
      </div>
      <div className='text-sm text-white/80 max-w-140'>
        <ShikiHighlighter text={activeItem.code} lang={activeItem.label}/>
      </div>
    </div>
  )
}
