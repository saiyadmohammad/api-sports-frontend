"use client"
import { Check, Search } from 'lucide-react'
import Image from 'next/image'

export default function DataCoverage({data}) {
  const columns = ['live', 'fixtures', 'results', 'standings', 'players', 'teams']
  console.log(data);

  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col'>
        <div className='flex-2 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <span className='primary-color font-medium'>DATA COVERAGE</span>
            <h2>Extensive coverage you can rely on</h2>
            <p className='max-w-2xl'>We cover 150+ leagues, cups and competitions from around the world with accurate and up-to-date data.</p>
          </div>

          <span className='flex items-center bg-gray-200 px-3 py-3 w-full max-w-md rounded-lg'>
            <input type='text' className='bg-gray-200 flex-1 outline-none placeholder:text-gray-400' name=""  placeholder='Search league, or competition...'/>
            <Search className='text-[#ff4d8d]'/>
          </span>

          <div className='text-sm flex flex-co gap-2'>
            <div className='text-sm px-4 py-2 bg-[#ff4d8d] rounded-full text-white'>All</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Popular</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Europe</div>
            <div className='text-sm px-4 py-2 border border-gray-200 rounded-full'>Asia</div>
          </div>
        </div>

        <div className='flex-5 flex flex-col gap-2 p-6 bg-gray-100 shadow-sm rounded-2xl'>
          <div className='grid grid-cols-8 mb-5'>
            <div className='col-span-2 font-bold'>League</div>
            {columns.map((item, i) => (
              <div key={i} className='flex justify-center'>
                <div className='font-bold'>{item}</div>
              </div>
            ))}
          </div>

          {data.map((item) => (
            <div className='grid grid-cols-8 ' key={item.name}>
              <div className='col-span-2 flex gap-4'>
                <Image className='w-10 h-10' src={item.img} height={50} width={50}  alt={item.name}/>
                <div className='flex flex-col'>
                  <div className='font-bold'>{item.name}</div>
                  <span className='text-sm'>{item.country}</span>
                </div>
              </div>

              {columns.map((feature, i) => (
                <div key={i} className='flex justify-center'>
                  {item.features[feature] ? (
                    <Check className='text-emerald-600' size={18} />
                  ) : (
                    <span className='text-gray-300'>—</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
