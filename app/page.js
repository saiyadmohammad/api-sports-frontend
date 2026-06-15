import Navbar from "@/components/Navbar";
import Blogs from "@/components/blogs/Blogs";
import AllSports from "@/components/allSports/AllSports";
import Hero from "@/components/hero/Hero";
import Developers from "@/components/developers/Developers";
import WhyChoose from "@/components/whyChoose/WhyChoose";
import SeamlessIntegration from "@/components/seamlessIntegrations/SeamlessIntegration";
import Features from "@/components/featuresSection/Features";
import Widgets from "@/components/widgets/Widgets";
import Cta from "@/components/cta/Cta";
import Footer from "@/components/Footer";
import { getHomePageData } from "@/lib/api/home";

export default async function Home() {

  let homePageData  = await getHomePageData();

  const getSectionData = (type) => {
    return homePageData.find(section => section.type === type);
  }


  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero data={getSectionData('hero')} />

      {/* Features Section */}
      <Features data={getSectionData('feature')} />

      {/* Widgets Section */}
      <Widgets data={getSectionData('widget')} />

      {/* All Sports Section */}
      <AllSports data={getSectionData('sports')} />

      {/* Developers Section */}
      <Developers data={getSectionData('developer')} />

      {/* Seamless integrations Section */}
      <SeamlessIntegration data={getSectionData('seamless_integrations')} />

      {/* Why Developer Choose Section */}
      <WhyChoose data={getSectionData('why_choose')} />

      {/* Blog Section */}
      <Blogs data={getSectionData('blog')} />

      {/* Call to action  */}
      <Cta data={getSectionData('cta_section')} />

      <Footer />
    </>
  );
}
