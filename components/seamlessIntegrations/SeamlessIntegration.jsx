import TechStacks from './TechStacks';
import { techIcons } from '@/lib/data';
import { MoveRight } from "lucide-react";

export default function SeamlessIntegration() {
  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">CONNECT & INTEGRATE</div>
          <h2 className="mb-4">Seamless integrations</h2>
          <p className="text-gray-700 mb-6">
            Easily connect API-SPORTS with your favorite tools, frameworks and platforms.
          </p>
          <a href="#" className="text-sm font-bold gradient-text tracking-wider">Explore all features <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>
        
        <div className="flex-2">
          <TechStacks techData={techIcons} />
        </div>
      </div>
    </section>
  )
}
