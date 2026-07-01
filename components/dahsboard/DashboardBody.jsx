import { api_usase } from '@/lib/dashboardData'
import Image from 'next/image'
import React from 'react'

export default function DashboardBody() {
  return (
    <div className='bg-[#F3F6F9] w-full p-6'>

      <h3>Apis</h3>
      
      <div className='p-2 flex gap-6'>
        {api_usase.map((api) => (
          <div key={api.id} className='bg-gray-200 p-6 rounded-xl'>
            <Image src={api.icon} alt={api.name} width={50} height={50} unoptimized />
            <p className='font-bold'>{api.name}</p>
            <p>{api.used}% Used</p>
          </div>
        ))}
      </div>

    </div>
  )
}
