import CodeShowCase from './CodeShowCase';
import { MoveRight } from "lucide-react";

export default function Developers() {
  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">BUILT FOR DEVELOPERS</div>
          <h2 className="mb-4">Simple to integrate. Powerful to scale.</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>RESTful API with JSON responses</li>
            <li>Real-time & historical data</li>
            <li>Easy authentication</li>
            <li>Comprehensive documentation</li>
          </ul>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">View documentation <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>

        <div className="flex-2 rounded-2xl overflow-hidden ">
          <CodeShowCase />
        </div>
      </div>
    </section>  
  )
}
