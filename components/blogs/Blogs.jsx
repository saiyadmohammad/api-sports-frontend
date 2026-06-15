import { blogsData } from '@/lib/data'
import { MoveRight } from 'lucide-react'
import BlogsCard from './BlogsCard'

export default function Blogs({data}) {
  const {heading, title, blogs} = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width flex flex-col  gap-8">
        <div className="flex justify-between items-end">
          <div>
            <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">{heading}</div>
            <h2>{title}</h2>
          </div>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">View all Blogs <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>
        
        <div className="flex gap-4 flex-col lg:flex-row">
          <BlogsCard blogsData={blogs} />
        </div>
      </div>
    </section>
  )
}
