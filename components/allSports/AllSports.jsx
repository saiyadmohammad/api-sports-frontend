import SportsCards from "./SportsCard";
import { sportsData, sportsIconMap } from "@/lib/data";

export default function AllSports({data}) {
  const {heading, sports} = data.section_data;

  return (
    <section className="section-space" data-aos="fade-left">
      <div className="container-width overflow-hidden">
        <div className="mb-6 text-center uppercase font-medium gradient-text">{heading}</div>
        <SportsCards sportsData={sportsData} sportsIconMap={sportsIconMap} />
      </div>
    </section>
  )
}