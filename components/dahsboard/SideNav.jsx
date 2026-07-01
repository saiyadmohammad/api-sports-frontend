import { nav_menu_bottom, nav_menu_top } from '@/lib/dashboardData'
import Image from 'next/image'
import React from 'react'

export default function SideNav() {




  return (
    <div className='w-22'>
      <div className='h-[10vh] flex items-center justify-center cursor-pointer'>
        <Image height={40} width={40} src="/assets/logo-light.png" alt="logo" unoptimized/>
      </div>

      <div className='flex flex-col items-center justify-between h-[90vh]'>
        <div className='flex flex-col gap-1 opacity-90'>
          {nav_menu_top.map((menu) => (
            <div key={menu.id} className='cursor-pointer hover:bg-gray-200 rounded-md p-3'>
              <Image height={30} width={25} src={menu.icon} alt={menu.name}/>
              {/* <p className="">{menu.name}</p> */}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-1 opacity-90 mb-6'>
          {nav_menu_bottom.map((menu) => (
            <div key={menu.id} className='cursor-pointer hover:bg-gray-200 rounded-md p-3'>
              <Image height={30} width={25} src={menu.icon} alt={menu.name}/>
              {/* <p className="">{menu.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
