import { blogsData } from '@/lib/data'
import { MoveRight } from 'lucide-react'
import BlogsCard from './BlogsCard'
import Link from 'next/link';

export default function Blogs({data}) {
  const {heading, title, subtitle, blogs} = data.page.section.find(section => section.type === 'blogs').section_data;
  // console.log(data.blogs);
  // console.log(blogs)

  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col'>
        <div className='flex-2 flex flex-col gap-4'>
          <div className='flex flex-col gap-5'>
            <span className='primary-color font-medium'>{heading}</span>
            <h2>{title}</h2>
            <p className='max-w-2xl'>{subtitle}</p>
            <Link href='blogs' className='gradient-button w-64'>View all articles →</Link>
          </div>
        </div>
  
        <div className='flex-5 flex flex-col md:flex-row gap-4'>
          <BlogsCard blogsData={data.blogs} />
        </div>
      </div>
    </section>
  )
}
