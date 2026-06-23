import Navbar from "@/components/Navbar";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";
import { getHomePageData, getSingleBlog, getBlogsData } from "@/lib/api/api";
import BlogsPageCard from "@/components/blogs/BlogsPageCard";
import Image from "next/image";
import PopularBlogsCard from "@/components/blogs/PopularBlogsCard";

export default async function Blog({params}) {
  const { slug } = await params;

  let homePageData  = await getHomePageData();
  let blog = await getSingleBlog(slug);
  let blogs = await getBlogsData();
  
  const date =  new Date(blog.created_at);
  const options = { month: 'short', day: 'numeric', year: 'numeric'};
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const getNavData = (type) => {
    return homePageData.settings.section.find(section => section.type === type);
  }

  return (
    <>
      <Navbar data={getNavData('setting')}/>

      {/* <Blogs data={homePageData} /> */}
      
      <section className='section-space'>
        <div className='container-width flex gap-10 lg:flex-row flex-col'>
          <div className='flex-4 flex flex-col gap-6 p-6 max-w-200'>
            <h2 className='p-0'>{blog.title}</h2>
            {/* <p>{blog.subtitle}</p> */}
            <div className="flex gap-4">
              <p>by <span className="font-bold">{blog.author}</span></p>
              {/* <p></p> */}
              <p className=''>{formattedDate}</p>
              {/* <p className=''>{formattedDate}</p> */}
            </div>
            <Image className='h-90 w-full object-cover rounded-lg' src={blog.image} alt={blog.title} height={200} width={200} unoptimized/>
            <div className="" dangerouslySetInnerHTML={{ __html: blog.blog_full_data }}></div>
          </div>
    
          <div className='flex-2 flex flex-col mt-5 gap-6'>
            <div className="border border-gray-200 rounded-xl p-6 max-w-200">
              <span className="text-xl font-bold mb-6">Popular Articles</span>
              <PopularBlogsCard  data={blogs}/>
            </div>
            {/* Tags  */}
            {/* <div className="border border-gray-200 rounded-xl p-6 max-w-200">
              <span className="text-xl font-bold">Tags</span>
              <div className="flex gap-2 mt-3">
                {blog.tags.map((tag, i) => (
                  <div key={i} className="border border-gray-200 rounded-full px-2">
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
