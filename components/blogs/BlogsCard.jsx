import Image from "next/image";

export default function BlogsCard({blogsData}) {
  return (
    <>
      {blogsData.map((blog) => (
        <div key={blog.id} className=" rounded-2xl p-5 flex gap-4 bg-linear-to-b from-rose-50 shadow-xs border border-rose-100 to-transparent">
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-bold text-xs text-rose-600 border-2 border-rose-600 px-3  py-1 rounded-2xl">{blog.type}</span>
            </div>
            <div className="">
              <h3 className="mb-1">{blog.title}</h3>
              <p>{blog.subtitle}</p>
            </div>

            <div className="text-sm font-medium">May 10, 2026</div>
          </div>

          <div className="flex items-center">
            <Image className="" src={blog.img} height={70} width={250} alt="hello"/>
          </div>
        </div>
      ))}
    </>
  )
}
