import FeaturesCards from './FeatursCards'
import { featuresData, iconMap } from '@/lib/data'
import {  MoveRight } from "lucide-react";

export default function Features() {
  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">EVERYTHING YOU NEED</div>
          <h2 className="mb-4">A complete platform for every use case</h2>
          <p className="text-gray-700 mb-6">
            Powerful features and tools to help you build amazing sports experiences.
          </p>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">Explore all features <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>
        
        <FeaturesCards featuresData={featuresData} iconMap={iconMap} />
      </div>
    </section>
  )
}
