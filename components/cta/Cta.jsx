import Image from "next/image";

export default function Cta({data}) {
  const {heading, subtitle, title, image} = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width" data-aos="fade-left">

        <div className="flex flex-col md:items-center items-start md:flex-row gap-10 lg:gap-10 justify-evenly p-10 gradient-bg rounded-2xl">
          <div className='flex flex-col gap-1'>
            <span className="text-white/90">{heading}</span>
            <div className="custom-header text-white/90">{title}</div>
            <div className="custom-paragraph text-white/90">{subtitle}</div>

            <div className='flex gap-4 mt-4'>
              <button className='gradient-button border border-pink-400'>Start for free</button>
              <button className='outline-button'>View pricing</button>
            </div>
          </div>

          {/* <div className="hidden md:inline">
            <ul className='list-disc list-inside space-y-2 '>
              <li>7-day free trial</li>
              <li>No credit card required</li>
              <li>Cancel anytime</li>
            </ul>
          </div> */}

          <Image className="hidden lg:inline" src={image} height={70} width={280} alt="hello" unoptimized/>
        </div>
      </div>
    </section>
  )
}