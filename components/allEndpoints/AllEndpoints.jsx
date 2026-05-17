import { leaguesData } from '@/lib/data'
import { Check, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import CodeShowCase from '../developers/CodeShowCase'

export default function AllEndpoints() {
  return (
    <section className='section-space'>
      <div className='container-width flex gap-10 lg:flex-row flex-col'>
        <div className='flex-2 flex flex-col gap-4'>
          <div className='flex flex-col gap-5'>
            <span className='primary-color font-medium'>API ENDPOINTS</span>
            <h2>Clean, simple and developer friendly</h2>
            <p className='max-w-2xl'>Well structured RESTful API endpoints that return real-time JSON data.</p>
            <a className='gradient-button w-64'>Explore all endpoints →</a>
          </div>
        </div>

        <div className='flex-5 rounded-xl overflow-hidden'>
          <CodeShowCase />
        </div>
      </div>
    </section>
  )
}
