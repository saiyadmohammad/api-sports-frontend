import Image from 'next/image';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

export default function PopularBlogsCard({data}) {
  return (
    <div className='flex flex-col gap-10 mt-4'>
      {data.map((blog) => {
        const date =  new Date(blog.created_at);
        const options = { month: 'short', day: 'numeric', year: 'numeric'};
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        return (
          <Link href={`/blogs/${blog.slug}`} key={blog.id} className='flex flex-row overflow-hidden max-w-200'>
            <Image className='h-20 w-30 object-cover rounded-lg' src={blog.image} alt={blog.title} height={200} width={200} unoptimized/>
            
            <div className='flex flex-col justify-center gap-4 px-4'>
              {/* <span className='text-sm border  border-gray-200 px-4 py-2 rounded-full absolute'>{blog.type}</span> */}
              <div className='flex flex-col gap-1'>
                <h3>{blog.title}</h3>
                <p>{formattedDate}</p>
              </div>

              {/* <Link href={`/blogs/${blog.slug}`} className='flex items-center gap-2 cursor-pointer'>
                <span className='text-pink-600 font-medium'>Read more </span>
                <ArrowRight size={20} className='text-pink-600' strokeWidth={2}/>
              </Link> */}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
