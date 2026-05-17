export default function SportsCards ({ sportsData, sportsIconMap }) {
  return (
    <div className="flex gap-10 justify-center overflow-x-scroll">
      {sportsData.map((item) => {
        const Icon = sportsIconMap[item.icon];
        return(
          <div key={item.id} className="flex flex-col items-center gap-2 font-medium">
            <div className="h-18 w-18 bg-gray-200 rounded-full flex items-center justify-center">
              <Icon className="text-pink-700" size={30}/>
            </div>
            <p>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}