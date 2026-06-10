import React from 'react'

export default function StatesCard({footballHeroData, footballHeroIconMap}) {
  return (
    <div className="flex gap-8 mt-10">
      {footballHeroData.map((item) => {
        const Icon = footballHeroIconMap[item.icon];
        return(
          <div key={item.id} className="flex flex-col items-center gap-2">
            <Icon className="text-amber-600" size={40} />
            <div className="font-extrabold text-2xl">{item.title}</div>
            <span className='text-sm'>{item.subtitle}</span>
          </div>
        )
      })}
    </div>
  )
}
