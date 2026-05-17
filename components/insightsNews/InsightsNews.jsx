import { blogsData, blogsData2, leaguesData } from '@/lib/data'
import { ArrowRight, Check, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CodeShowCase from '../developers/CodeShowCase'

export default function InsightsNews() {
  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col'>
        <div className='flex-2 flex flex-col gap-4'>
          <div className='flex flex-col gap-5'>
            <span className='primary-color font-medium'>FROM OUR BLOG</span>
            <h2>Latest news & insights</h2>
            <p className='max-w-2xl'>Tips, updates and guides to help you build better with our API.</p>
            <a className='gradient-button w-64'>View all articles →</a>
          </div>
        </div>
 
        <div className='flex-5 flex flex-col md:flex-row gap-4'>
          {blogsData2.map((item) => (
            <div key={item.id} className='border border-gray-200 rounded-xl overflow-hidden max-w-100'>
              <Image className='h-34 w-full object-cover' src={item.img} alt={item.title} height={200} width={200}/>
              <div className='flex flex-col gap-4 p-4'>
                {/* <div className='text-sm border'>{item.type}</div> */}
                <div >
                  <p className='mb-3'>{item.date}</p>
                  <h3>{item.title}</h3>
                </div>

                <div className='flex items-center gap-2'>
                  <a className='text-pink-600 font-medium'>Read more </a>
                  <ArrowRight size={20} className='text-pink-600' strokeWidth={2}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
