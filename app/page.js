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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Widgets Section */}
      <Widgets />

      {/* All Sports Section */}
      <AllSports />

      {/* Developers Section */}
      <Developers />

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
