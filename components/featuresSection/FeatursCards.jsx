export default function FeaturesCards ({ featuresData, iconMap }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 flex-2" data-aos="fade-up">
      {featuresData.map((feature) => {
        const Icon = iconMap[feature.icon];
        return (
          <div key={feature.title} className="px-5 pt-5 pb-8 shadow-md border border-gray-100 rounded-lg">
            <div className="flex gap-2 mb-2 items-center">
              <div className="h-10 w-10 bg-gray-100  rounded-full flex items-center justify-center">
                <Icon size={20} className="text-blue-500 " />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
            </div>
            <p className="text-gray-600 text-start">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}