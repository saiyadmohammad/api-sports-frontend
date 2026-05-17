import { leaguesData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

export default function LeaguesCard() {
  return (
    <div className='flex gap-20 justify-center flex-wrap bg-gray-100 shadow-sm p-10 rounded-2xl'>
      {leaguesData.map((item) => (
        <div key={item.id} className='flex flex-col items-center gap-4'>
          <Image src={item.img} height={60} width={60} alt={item.name}/>
          <span className='font-medium '>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
