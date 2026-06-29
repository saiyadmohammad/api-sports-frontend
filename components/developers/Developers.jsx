import CodeShowCase from './CodeShowCase';
import { MoveRight } from "lucide-react";

export default function Developers({ data }) {
  const { heading, title, features,  codes} = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8" data-aos="fade-up">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">{heading}</div>
          <h2 className="mb-4">{title}</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">View documentation <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>

        <div className="flex-2 rounded-2xl overflow-hidden" data-aos="fade-left">
          <CodeShowCase codes={codes} />
        </div>
      </div>
    </section>  
  )
}
