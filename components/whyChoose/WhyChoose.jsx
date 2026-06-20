import Image from "next/image";

export default function WhyChoose({data}) {
  const {heading, features} = data.section_data;
  
  return (
    <section className="section-space">
      <div className="container-width lg:px-24">
        <div className="mb-6 text-center uppercase font-medium gradient-text">{heading}</div>

        <div className="flex flex-col lg:flex-row gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center gap-2">
              <div className="p-5 rounded-full border border-gray-100 shadow-xs">
                <Image className="" src={feature.img} height={64} width={64} alt="react" unoptimized/>
              </div>

              <div className="">
                <h3 className="mb-1">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
