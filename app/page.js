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

export default async function Home() {

  let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/test`);
  console.log(response);
  
  if(!response.ok) {
    throw new Error("Failed to fetch data");
  }
  
  let data = await response.json();
  console.log(data[0].section[0]);


  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero data={data[0].section[0]} />

      {/* Features Section */}
      <Features data={data[0].section[1]} />

      {/* Widgets Section */}
      <Widgets data={data[0].section[2]} />

      {/* All Sports Section */}
      <AllSports />

      {/* Developers Section */}
      <Developers data={data[0].section[3]} />

      {/* Seamless integrations Section */}
      <SeamlessIntegration />

      {/* Why Developer Choose Section */}
      <WhyChoose />

      {/* Blog Section */}
      <Blogs />

      {/* Call to action  */}
      <Cta />

      <Footer />
    </>
  );
}
