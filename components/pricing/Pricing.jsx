import { pricingData } from '@/lib/data'
import { Check } from 'lucide-react'
import React from 'react'

export default function Pricing({ data }) {
  const {heading, title, subtitle, pricing_plans } = data.section_data;

  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 flex-col items-center'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-5 items-center'>
            <span className='primary-color font-medium'>{ heading }</span>
            <h2>{ title }</h2>
            <p className='max-w-2xl'>{ subtitle }</p>
            {/* <a className='gradient-button w-64'>Explore all endpoints →</a> */}
          </div>
        </div>

        <div className={`flex gap-10 flex-col md:flex-row`}>
          {pricing_plans.map((item) => (
            <div key={item.id} className='flex flex-col gap-4 border border-gray-200 gradient-border shadow-sm px-8 py-6 rounded-xl'>
              <div>
                <h3 className='mb-1'>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className='flex gap-2 items-end'>
                <div className='flex items-start gap-1'>
                  <div className='font-bold text-lg'>{item.currency}</div>
                  <div className='text-3xl font-bold'>{item.price}</div>
                </div>
                <div className=''>{item.billing}</div>
              </div>
              <div className='flex flex-col gap-2'>
                {item.features.map((feature) => (
                  <div key={feature} className='flex items-center gap-1'>
                    <Check strokeWidth={3} size={15}/> <p>{feature}</p>
                  </div>
                ))}
              </div>

              <a className='gradient-button'>{item.buttonText}</a>
            </div>
          ))}
        </div>

        {/* <div>
          
        </div> */}
      </div>
    </section>
  )
}
