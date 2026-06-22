import Navbar from "@/components/Navbar";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";
import { getBlogsData, getHomePageData } from "@/lib/api/api";
import BlogsPageCard from "@/components/blogs/BlogsPageCard";

export default async function Blog() {

  let homePageData  = await getHomePageData();
  let blogs = await getBlogsData();

  // console.log(homePageData.blogs)

  const getNavData = (type) => {
    return homePageData.settings.section.find(section => section.type === type);
  }

  return (
    <>
      <Navbar data={getNavData('setting')}/>

      {/* <Blogs data={homePageData} /> */}

      <section className='section-space'>
        <div className='container-width flex gap-10 lg:flex-row flex-col'>
          <div className='flex-3 flex flex-col gap-4'>
            <div className='flex flex-col gap-5'>
              <h2>All Latest Articles & Blogs</h2>
              <p className='max-w-2xl'>Tips, updates and guides to help you build better with our API.</p>
              <BlogsPageCard data={blogs}/>
            </div>
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
