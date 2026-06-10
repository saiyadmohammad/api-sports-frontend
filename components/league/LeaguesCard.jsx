import Image from 'next/image'

export default function LeaguesCard({data}) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 bg-gray-100 shadow-sm p-10 rounded-2xl'>
      {data.map((item) => (
        <div key={item.id} className='flex flex-col items-center justify-center gap-4'>
          <Image src={item.img} height={60} width={60} alt={item.name}/>
          <span className='font-medium '>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
