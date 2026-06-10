import Endpoints from '@/components/allEndpoints/AllEndpoints'
import DataCoverage from '@/components/dataCoverage/DataCoverage'
import SportsHero from '@/components/sportsHero/SportsHero'
import Footer from '@/components/Footer'
import InsightsNews from '@/components/insightsNews/InsightsNews'
import Leagues from '@/components/league/Leagues'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/pricing/Pricing'
import { cricketData } from '@/lib/data'
import React from 'react'

export default function Cricket() {
  return (
    <>
      <Navbar />
      <SportsHero data={cricketData.hero_section}/>
      <Leagues data={cricketData.supported_competitions}/>
      <DataCoverage  data={cricketData.supported_competitions}/>
      <Endpoints />
      <Pricing />
      <InsightsNews data={cricketData.blogs}/>
      <Footer />
    </>
  )
}
