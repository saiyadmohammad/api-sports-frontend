import Endpoints from '@/components/allEndpoints/AllEndpoints'
import DataCoverage from '@/components/dataCoverage/DataCoverage'
import SportsHero from '@/components/sportsHero/SportsHero'
import Footer from '@/components/Footer'
import InsightsNews from '@/components/insightsNews/InsightsNews'
import Leagues from '@/components/league/Leagues'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/pricing/Pricing'
import { footBallData } from '@/lib/data'
import React from 'react'
import { getFootBallPageData } from '@/lib/api/home'

export default async function football() {
  let footBallPageData  = await getFootBallPageData();
  // console.log(footBallPageData);

  const getSectionData = (type) => {
    return footBallPageData.find(section => section.type === type);
  }

  console.log(getSectionData(''));

  return (
    <>
      <Navbar />
      <SportsHero data={getSectionData('hero')}/>
      <Leagues data={getSectionData('competitions')}/>
      <DataCoverage data={getSectionData('data_coverage')}/>
      <Endpoints data={getSectionData('developer')}/>
      <Pricing data={getSectionData('pricing')}/>
      <InsightsNews data={getSectionData('blogs')}/>
      <Footer />
    </>
  )
}
