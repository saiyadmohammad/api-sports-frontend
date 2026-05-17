import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="section-space">
      <div className="container-width lg:px-24">
        <div className="mb-6 text-center uppercase font-medium gradient-text">Why Developers Choose API-SPORTS</div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex items-center gap-2">
            <div className="p-5 rounded-full border border-gray-100 shadow-xs">
              <Image className="" src="/assets/img/shuttle.png" height={64} width={64} alt="react" />
            </div>

            <div className="">
              <h3 className="mb-1">Easy to start</h3>
              <p>Get your API key and start making requests in minutes.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-5 rounded-full border border-gray-100 shadow-xs">
              <Image className="" src="/assets/img/scalability.png" height={64} width={64} alt="react" />
            </div>

            <div className="">
              <h3 className="mb-1">Reliable & Scalable</h3>
              <p>Built on robust infrastructure with 99.9% uptime.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-5 rounded-full border border-gray-100 shadow-xs">
              <Image className="" src="/assets/img/customer-support.png" height={64} width={64} alt="react" />
            </div>

            <div className="">
              <h3 className="mb-1">Developer Support</h3>
              <p>Fast, friendly support when you need it.</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
