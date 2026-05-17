import SportsCards from "./SportsCard";
import { sportsData, sportsIconMap } from "@/lib/data";

export default function AllSports() {
  return (
    <section className="section-space">
      <div className="container-width overflow-hidden">
        <div className="mb-6 text-center uppercase font-medium gradient-text">Covering all mejor sports</div>
        <SportsCards sportsData={sportsData} sportsIconMap={sportsIconMap} />
      </div>
    </section>
  )
}


