"use client"
import Image from "next/image";
import { FileText, MoveRight, Zap } from "lucide-react";
import { footballHeroIconMap } from "@/lib/data";
import StatesCard from "./StatesCard";
import { useEffect, useRef, useState } from "react";

export default function SportsHero({data}) {
  const {heading, title_first, title_middle, title_last, subtitle, image, key_metrics} = data.section_data;
  const ref = useRef();
  const [isVisible, setIsvisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsvisible(entry.isIntersecting);
    },{threshold: .1});

    if(ref.current){
      observer.observe(ref.current);
    }

    return() => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, []);


  return (
    <section className="section-space bg-gray-50">
      <div className="container-width grid lg:grid-cols-2 items-center gap-8">
        <div className="flex gap-6 flex-col items-start" data-aos="fade-right" ref={ref}>
          {/* <div className="flex items-center text-xs font-medium text-gray-500 border-2 border-gray-300 px-4 py-2 rounded-full"> <Zap size={16} className="mr-2"/>{heading}</div> */}
          <h1 className=" mb-4"> {title_first} <span className="gradient-text"> {title_middle} </span> {title_last} </h1>
          <p className="text-lg text-gray-700 mb-6">
            {subtitle}
          </p>

          <div className="flex gap-4">
            <a href="#" className="gradient-button">Get Started <MoveRight className="ml-4" /> </a>
            <a href="#" className="outline-button">View Docs <FileText className="mx-auto ml-4 text-blue-500" /> </a>
          </div>
          {isVisible && <StatesCard footballHeroData={key_metrics}  footballHeroIconMap={footballHeroIconMap}/>}
        </div>
        
        <div className="flex items-center justify-center" data-aos="zoom-in">
          <Image className="w-full" src={image} height={700} width={700} alt="sports-img" unoptimized/>
        </div>
      </div>
    </section>
  )
}
