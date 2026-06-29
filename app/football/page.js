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
import { getFootBallPageData } from '@/lib/api/api'
import Blogs from '@/components/blogs/Blogs'

export default async function football() {
  let footBallPageData  = await getFootBallPageData();
  
  const getSectionData = (type) => {
    return footBallPageData.page.section.find(section => section.type === type);
  }
  const getNavData = (type) => {
    return footBallPageData.settings.section.find(section => section.type === type);
  }

  return (
    <>
      <Navbar data={getNavData('setting')}/>
      <main>
        <SportsHero data={getSectionData('hero_football')}/>
        <Leagues data={getSectionData('data_coverage_football')}/>
        <DataCoverage data={getSectionData('data_coverage_football')}/>
        <Endpoints data={getSectionData('developer_football')}/>
        <Pricing data={footBallPageData}/>
        {/* <InsightsNews data={getSectionData('blogs')}/> */}
        <Blogs data={footBallPageData} />
      </main>
      <Footer />
    </>
  )
}
