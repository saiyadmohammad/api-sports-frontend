import FeaturesCards from './FeatursCards'
import { featuresData, iconMap } from '@/lib/data'
import {  MoveRight } from "lucide-react";

export default function Features({ data }) {
  const { heading, title, subtitle, features } = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">{heading}</div>
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">
            {subtitle}
          </p>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">Explore all features <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>
        
        <FeaturesCards featuresData={features} iconMap={iconMap} />
      </div>
    </section>
  )
}
