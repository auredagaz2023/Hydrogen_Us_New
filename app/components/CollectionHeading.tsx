export function CollectionHeading({
  heading,
  showTitle = true
}: {
  heading: String,
  showTitle?: boolean
}) {
  return (
    <div className={`flex flex-row flex-wrap items-center ${showTitle ? "justify-between" : "justify-end"}`}>
      {/* Heading */}
      { showTitle && 
        <div className="w-full md:w-5/12 pb-4">
          <h1 className="text-dark-blue text-cusheading lg:text-50 font-semibold">{heading}</h1>
        </div>
      }
    </div>
  )
}