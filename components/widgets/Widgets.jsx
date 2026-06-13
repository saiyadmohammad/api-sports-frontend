import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Widgets( { data }) {
  const { heading, title, features } = data.section_data;

  return (
    <section className="section-space">
      <div className="container-width flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="text-sm font-bold gradient-text uppercase tracking-wider mb-2">{heading}</div>
          <h2 className="mb-4">{title}</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <a href="#" className="text-sm font-bold gradient-text tracking-wider">View all widgets <MoveRight size={20} className="inline-block ml-2 text-pink-400" /></a>
        </div>

        <div className="grid gap-4 md:grid-cols-3 flex-2">
          <div className="p-6 shadow-md border border-gray-100 rounded-lg bg-gray-10">
            <h3 className="mb-4">Top Scores</h3>

            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src="/assets/players-pic/litton-das.webp" alt="Widget Scores" width={35} height={35} className="rounded-full"/>
                  <p className="font-bold ml-2">L. Das</p>
                </div>
                <p className="font-bold">27</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src="/assets/players-pic/sarfaraz-ahmed.webp" alt="Widget Scores" width={35} height={35} className="rounded-full"/>
                  <p className="font-bold ml-2">S. Ahmed</p>
                </div>
                <p className="font-bold">24</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image src="/assets/players-pic/shaheen-afridi.webp" alt="Widget Scores" width={35} height={35} className="rounded-full"/>
                  <p className="font-bold ml-2">S Afridi</p>
                </div>
                <p className="font-bold">20</p>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md border border-gray-100 rounded-lg bg-gray-10">
            <h3 className="mb-4">Live Match</h3>

            <div className="flex gap-6 pt-6 pb-4 mb-4 items-start justify-between border-b-2 border-gray-200">
              <Image src="/assets/teams/arsenal.png" alt="Widget Scores" width={45} height={45} className="rounded-full"/>

              <div className="font-bold flex flex-col items-center mt-1 gap-1">
                <div className="text-2xl">2 - 1</div>
                <div className="text-xs">67.23</div>
              </div>

              <Image src="/assets/teams/liverpool.png" alt="Widget Scores" width={45} height={45} className="rounded-full"/>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-4 font-medium">
                <div>67"</div>
                <div>⚽</div>
                <div>Goal</div>
              </div>
              <div className="flex gap-4 font-medium">
                <div>55"</div>
                <div>🟨</div>
                <div>Yello Card</div>
              </div>
              <div className="flex gap-4 font-medium">
                <div>50"</div>
                <div>🔁</div>
                <div>Substitution</div>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-md border border-gray-100 rounded-lg bg-gray-10">
            <h3 className="mb-4">League Table</h3>

            <div className="flex flex-col gap-5 py-2">

              <div className="flex justify-between">
                <div className="flex">
                  <div>#</div>
                  <div className="ml-6">Teams</div>
                </div>
                <div>Pts</div>
              </div>

              <div className="flex justify-between font-medium">
                <div className="flex">
                  <div>1</div>
                  <div className="ml-6 flex">
                    <Image src="/assets/teams/man-city.png" alt="Widget Scores" width={25} height={25} className="rounded-full"/>
                    <div className="ml-2">Man City</div>
                  </div>
                </div>
                <div>89</div>
              </div>

              <div className="flex justify-between font-medium">
                <div className="flex">
                  <div>2</div>
                  <div className="ml-6 flex">
                    <Image src="/assets/teams/arsenal.png" alt="Widget Scores" width={25} height={25} className="rounded-full"/>
                    <div className="ml-2">Arsenal</div>
                  </div>
                </div>
                <div>81</div>
              </div>

              <div className="flex justify-between font-medium">
                <div className="flex">
                  <div>3</div>
                  <div className="ml-6 flex">
                    <Image src="/assets/teams/liverpool.png" alt="Widget Scores" width={25} height={25} className="rounded-full"/>
                    <div className="ml-2">Liverpool</div>
                  </div>
                </div>
                <div>78</div>
              </div>

              <div className="flex justify-between font-medium">
                <div className="flex">
                  <div>4</div>
                  <div className="ml-6 flex">
                    <Image src="/assets/teams/aston-villa.png" alt="Widget Scores" width={25} height={25} className="rounded-full"/>
                    <div className="ml-2">Aston Villa</div>
                  </div>
                </div>
                <div>68</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}
