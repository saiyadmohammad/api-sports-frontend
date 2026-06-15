import React from 'react'
import { BiFootball } from 'react-icons/bi'
import LeaguesCard from './LeaguesCard'

export default function Leagues({data}) {
  const {all_features } = data.section_data;

  return (
    <section className="section-space bg-gray-50">
      <div className="container-width">
        <LeaguesCard data={all_features} />
      </div>
    </section>
  )
}
