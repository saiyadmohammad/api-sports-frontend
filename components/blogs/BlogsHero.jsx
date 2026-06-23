import { FileText, MoveRight, Zap } from "lucide-react";
import Image from "next/image";


export default function BlogsHero() {
  return (
    <section className="section-space bg-gray-50">
      <div className="container-width grid lg:grid-cols-2 items-center gap-8">
        <div className="flex gap-6 flex-col items-start">
          <div className="flex items-center text-xs font-medium text-gray-500 border-2 border-gray-300 px-4 py-2 rounded-full"> <Zap size={16} className="mr-2"/>Blogs</div>
          <h1 className=" mb-4"> Latest <span className="gradient-text"> articles </span> & insights </h1>
          <p className="text-lg text-gray-700 mb-6">
            Tips tutorials and industry insights to help you build better apps with real-time sports data.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <Image className="max-w-100" src='/assets/img/cricket2.png' height={700} width={700} alt="sports-img" unoptimized/>
        </div>
      </div>
    </section>
  )
}
