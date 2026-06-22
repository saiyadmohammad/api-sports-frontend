import Navbar from "@/components/Navbar";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";
import { getHomePageData, getSingleBlog } from "@/lib/api/api";
import BlogsPageCard from "@/components/blogs/BlogsPageCard";
import Image from "next/image";

export default async function Blog({params}) {
  const { slug } = await params;

  let homePageData  = await getHomePageData();
  let blog = await getSingleBlog(slug);
  
  const date =  new Date(blog.created_at);
  const options = { month: 'short', day: 'numeric', year: 'numeric'};
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  const getNavData = (type) => {
    return homePageData.settings.section.find(section => section.type === type);
  }

  const rtf1 = new Intl.RelativeTimeFormat("en", { style: "short" });
  console.log(rtf1.format(-3, "day"));

  return (
    <>
      <Navbar data={getNavData('setting')}/>

      {/* <Blogs data={homePageData} /> */}
      
      <section className='section-space'>
        <div className='container-width flex gap-10 lg:flex-row flex-col'>
          <div className='flex-3 flex flex-col gap-6 p-6 max-w-200'>
            <h2 className='p-0'>{blog.title}</h2>
            <div className="flex justify-between">
              <p className=''>{formattedDate}</p>
              <p className=''>{formattedDate}</p>
            </div>
            <Image className='h-90 w-full object-cover' src={blog.image} alt={blog.title} height={200} width={200} unoptimized/>
            <div className="" dangerouslySetInnerHTML={{ __html: blog.blog_full_data }}></div>
          </div>
    
          <div className='flex-2 flex flex-col md:flex-row gap-4'>
            {/* <BlogsCard blogsData={data.blogs} /> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
