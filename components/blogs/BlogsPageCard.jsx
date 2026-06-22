import Image from 'next/image';
import { ArrowRight } from 'lucide-react'
import Link from 'next/link';

export default function BlogsPageCard({data}) {

  return (
    <div className='flex flex-col gap-10 mt-10'>
      {data.map((blog) => {
        const date =  new Date(blog.created_at);
        const options = { month: 'short', day: 'numeric', year: 'numeric'};
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

        return (
          <div key={blog.id} className='border border-gray-200 rounded-xl overflow-hidden max-w-200'>
            <Image className='h-90 w-full object-cover' src={blog.image} alt={blog.title} height={200} width={200} unoptimized/>
            <div className='flex flex-col items-start gap-4 p-4'>
              {/* <span className='text-sm border  border-gray-200 px-4 py-2 rounded-full absolute'>{item.type}</span> */}
              <div >
                <p className='mb-3'>{formattedDate}</p>
                <h3 className='mb-2'>{blog.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: blog.blog_data }}></div>
              </div>

              <Link href={`/blogs/${blog.slug}`} className='flex items-center gap-2 cursor-pointer'>
                <span className='text-pink-600 font-medium'>Read more </span>
                <ArrowRight size={20} className='text-pink-600' strokeWidth={2}/>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
