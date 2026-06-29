import Image from "next/image";

export default function TechStacks({techData}) {
  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {techData.map((item) => (
        <div key={item.id} className="flex flex-col items-center justify-center gap-1 shadow-sm rounded-xl h-36 border border-gray-100">
          <Image src={item.img} height={64} width={64} alt={item.name} unoptimized/>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}
