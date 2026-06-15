import TechStacks from './TechStacks';
import { techIcons } from '@/lib/data';
import { Heading, MoveRight } from "lucide-react";

export default function SeamlessIntegration({data}) {
  const {hading, title, subtitle, tech_icons} = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">{hading}</div>
          <h2 className="mb-4">{title}</h2>
          <p className="text-gray-700 mb-6">
            {subtitle}
          </p>
          <a href="#" className="text-sm font-bold gradient-text tracking-wider">View all integrations <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>
        
        <div className="flex-2">
          <TechStacks techData={tech_icons} />
        </div>
      </div>
    </section>
  )
}
