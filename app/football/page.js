import Endpoints from '@/components/allEndpoints/AllEndpoints'
import DataCoverage from '@/components/dataCoverage/DataCoverage'
import FootballHero from '@/components/footballHero/FootballHero'
import Footer from '@/components/Footer'
import InsightsNews from '@/components/insightsNews/InsightsNews'
import Leagues from '@/components/league/Leagues'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/pricing/Pricing'
import React from 'react'

export default function football() {
  return (
    <>
      <Navbar />
      <FootballHero />
      <Leagues />
      <DataCoverage />
      <Endpoints />
      <Pricing />
      <InsightsNews />
      <Footer />
    </>
  )
}
