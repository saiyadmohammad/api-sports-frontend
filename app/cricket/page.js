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
import { getCricketPageData } from '@/lib/api/api'
import Blogs from '@/components/blogs/Blogs'

export default async function Cricket() {
   let cricketPageData = await getCricketPageData();
  
    const getSectionData = (type) => {
      return cricketPageData.page.section.find(section => section.type === type);
    }
    const getNavData = (type) => {
      return cricketPageData.settings.section.find(section => section.type === type);
    }

  return (
    <>
      <Navbar data={getNavData('setting')} />
      <main>
        <SportsHero data={getSectionData('hero_cricket')}/>
        <Leagues data={getSectionData('data_coverage_cricket')}/>
        <DataCoverage  data={getSectionData('data_coverage_cricket')}/>
        <Endpoints data={getSectionData('developer_cricket')}/>
        <Pricing data={cricketPageData}/>
        {/* <InsightsNews data={getSectionData('blogs')}/> */}
        <Blogs data={cricketPageData} />
      </main>
      <Footer />
    </>
  )
}
