"use client"
import { Check, Search } from 'lucide-react'
import Image from 'next/image'

export default function DataCoverage({data}) {  
  const { heading, title, subtitle, all_features } = data.section_data;
  const columns = ['live', 'fixtures', 'results', 'standings', 'players', 'teams'];

  console.log(all_features);

  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col' data-aos="fade-up">
        <div className='flex-2 flex flex-col gap-6'>
          <div className='flex flex-col gap-5'>
            <span className='primary-color font-medium'>{ heading }</span>
            <h2>{ title }</h2>
            <p className='max-w-2xl'>{ subtitle }</p>
          </div>

          <span className='flex items-center bg-gray-200 px-3 py-3 w-full max-w-md rounded-lg'>
            <input type='text' className='bg-gray-200 flex-1 outline-none placeholder:text-gray-400' name=""  placeholder='Search league, or competition...'/>
            <Search className='text-[#ff4d8d]'/>
          </span>

          {/* <div className='text-sm flex flex-co gap-2'>
            <div className='text-sm px-4 py-2 bg-[#ff4d8d] rounded-full text-white'>All</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Popular</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Europe</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Asia</div>
          </div> */}
        </div>

        <div className="flex-5">

          {/* Desktop View   */}
          <div className="hidden lg:flex flex-col gap-1 p-6 bg-gray-100 shadow-sm rounded-2xl">
            <div className="grid grid-cols-8 mb-2">
              <div className="col-span-2 font-bold">League</div>

              {columns.map((item) => (
                <div key={item} className="flex justify-center">
                  <div className="font-bold capitalize">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            {all_features.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-8 items-center py-2 border-b border-gray-200 last:border-none"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <Image
                    src={item.img}
                    width={40}
                    height={40}
                    alt={item.name}
                    className="w-10 h-10 object-contain"
                    unoptimized
                  />

                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">
                      {item.country}
                    </div>
                  </div>
                </div>

                {columns.map((feature) => (
                  <div
                    key={feature}
                    className="flex justify-center"
                  >
                    {item.features[feature] ? (
                      <Check
                        className="text-emerald-600"
                        size={18}
                      />
                    ) : (
                      <span className="text-gray-300">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Mobile View  */}
          <div className="lg:hidden space-y-4">
            {all_features.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={item.img}
                    width={48}
                    height={48}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                    unoptimized
                  />

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.country}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {columns.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2"
                    >
                      <span className="capitalize text-sm font-medium">
                        {feature}
                      </span>

                      {item.features[feature] ? (
                        <Check
                          className="text-emerald-600"
                          size={18}
                        />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </div>
                  ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
