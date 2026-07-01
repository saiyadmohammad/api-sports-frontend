import { getBlogsData } from '@/lib/api/api';
import Image from 'next/image';
import React from 'react'

export default async function Sidebar() {

  
  let blogs = await getBlogsData();

  console.log(blogs);

  return (
    <div className='border-l border-gray-200 w-85 py-6 overflow-y-scroll'>
      <div className='flex flex-col gap-4 px-4'>
        <h3 className='m-2'>News</h3>
        
        {blogs.map((blog) => (
          <div key={blog.id} className='shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm p-4 flex flex-col gap-2'>
            <p className='font-bold mb-2'>{blog.title}</p>
            <Image className='rounded-sm h-60 w-full object-cover' src={blog.image}  height={300} width={300} alt={blog.title} unoptimized/>

            <p className='text-sm text-gray-500'>{blog.subtitle}</p>

            <a className='cursor-pointer font-medium text-sky-700 border-t border-gray-200 pt-2'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}
