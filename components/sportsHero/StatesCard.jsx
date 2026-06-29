import CountUp from 'react-countup';

export default function StatesCard({footballHeroData, footballHeroIconMap}) {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
      {footballHeroData.map((item) => {
        const Icon = footballHeroIconMap[item.icon];
        let numInStr = ""; let str = "";
        
        for(const char of item.title){
          if(char >= 0 || char <= 9 || char == '.'){
            numInStr += char;
          }else{
            str += char;
          }
        }

        return(
          <div key={item.id} className="flex flex-col items-center gap-2 w-25">
            <Icon className="text-amber-600" size={40} />
            <div className="font-extrabold text-2xl">
              {numInStr ? <span><CountUp end={Number(numInStr)} duration={5}/><span>{str}</span></span> : <span>{item.title}</span>}
            </div>
            <span className='text-sm'>{item.subtitle}</span>
          </div>
        )
      })}
    </div>
  )
}
