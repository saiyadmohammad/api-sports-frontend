import { footerData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import { FaBeer, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="pt-18 pb-8 bg-gray-200">
      <div className="container-width">
        <div className='grid lg:grid-cols-6 md:grid-cols-2 gap-10'>
          <div className='md:col-span-2'>
            <Image className="" src="/assets/logo-light.png" width={60} height={60} alt="Logo"/>
            <p className='mt-2'>The most reliable real-time sports data API for developers and businesses.</p>

            <div className='flex gap-4 mt-4'>
              <a href='#'> <FaFacebook size={24} color='#555' /> </a>
              <a href='#'> <FaTwitter size={24} color='#555' /> </a>
              <a href='#'> <FaYoutube size={24} color='#555' /> </a>
            </div>
          </div>

          {footerData.map((item) => (
            <div className='' key={item.id}>
              <h3>{item.title}</h3>
              <div className='flex flex-col mt-2 gap-2'>
                {item.links.map((link) => (
                  <a key={link.label} className='text-md text-gray-600' href={link.href}>{link.label}</a>
                ))}
              </div>
            </div>
          ))}

        </div>
        <div className='text-center mt-8 text-sm text-gray-500'>© 2026 API-SPORTS. All rights reserved.</div>
      </div>
    </footer>
  )
}
