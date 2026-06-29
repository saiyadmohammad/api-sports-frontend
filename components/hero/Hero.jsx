import Image from "next/image";
import { FileText, MoveRight, Zap } from "lucide-react";

export default function Hero({ data }) {
  const { title_first, title_second, subtitle, heading, image } = data.section_data;

  return (
      <section className="section-space bg-gray-50">
        <div className="container-width flex flex-col items-center gap-8 lg:flex-row ">
          <div className="flex gap-6 flex-col items-start" data-aos="fade-right">
            <div className="flex items-center text-xs font-medium text-gray-500 border-2 border-gray-300 px-4 py-2 rounded-full"> <Zap size={16} className="mr-2"/> {heading}</div>
            <h1 className=" mb-4">{title_first} <br/> <span className="gradient-text">{title_second} </span></h1>
            <p className="text-lg text-gray-700 mb-6">
              {subtitle}
            </p>

            <div className="flex gap-4">
              <a href="#" className="gradient-button">  Get Started <MoveRight className="ml-4" /> </a>
              <a href="#" className="outline-button">View Docs <FileText className="mx-auto ml-4 text-blue-500" /> </a>
            </div>
          </div>
          
          <div className="relative  aspect-5/3 w-full"  data-aos="zoom-in">
            <Image
              src={image}
              alt="Sports API Hero Image"
              fill
              className="object-cover"
              loading="eager"
              unoptimized
            />
          </div>
        </div>
      </section>
  )
}
