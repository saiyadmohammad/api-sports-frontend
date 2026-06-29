import { leaguesData } from '@/lib/data'
import { Check, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CodeShowCase from '../developers/CodeShowCase'

export default function AllEndpoints({ data }) {
  const { heading, title, subtitle,  codes } = data.section_data;

  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col'>
        <div className='flex-2 flex flex-col gap-4' data-aos="fade-up">
          <div className='flex flex-col gap-5'>
            <span className='primary-color font-medium'>{ heading }</span>
            <h2>{ title }</h2>
            <p className='max-w-2xl'>{ subtitle }</p>
            <a className='gradient-button w-64'>Explore all endpoints →</a>
          </div>
        </div>

        <div className='flex-5 rounded-xl overflow-hidden' data-aos="fade-left">
          <CodeShowCase codes = {codes} />
        </div>
      </div>
    </section>
  )
}