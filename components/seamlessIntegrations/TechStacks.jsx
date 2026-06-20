import Image from "next/image";

export default function TechStacks({techData}) {
  return (
    <div className="flex gap-4 flex-wrap">
      {techData.map((item) => (
        <div key={item.id} className="flex flex-col items-center justify-center gap-1 shadow-sm rounded-xl w-44 h-30 border border-gray-100">
          <Image src={item.img} height={64} width={64} alt={item.name} unoptimized/>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
