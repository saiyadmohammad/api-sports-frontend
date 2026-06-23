import Navbar from "@/components/Navbar";
import Blogs from "@/components/blogs/Blogs";
import Footer from "@/components/Footer";
import { getBlogsData, getHomePageData } from "@/lib/api/api";
import BlogsPageCard from "@/components/blogs/BlogsPageCard";
import BlogsHero from "@/components/blogs/BlogsHero";
import PopularBlogsCard from "@/components/blogs/PopularBlogsCard";

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
      <BlogsHero />

      <section className='section-space'>
        <div className='container-width flex gap-10 lg:flex-row flex-col'>
          <div className='flex-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-5'>
              <BlogsPageCard data={blogs}/>
            </div>
          </div>
          
          <div className='flex-2 flex flex-col'>
            <div className="border border-gray-200 rounded-xl p-6 max-w-200">
              <h3 className="text-2xl mb-6">Popular Articles</h3>
              <PopularBlogsCard  data={blogs}/>
            </div>
            {/* <BlogsCard blogsData={data.blogs} /> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
