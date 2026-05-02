export function Skeleton() {
  return <section className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-4 p-4">
    {Array.from({ length: 9 }).map((_, index) => (
      <div key={index} className="p-2">
        <div className="w-full h-64 bg-gray-300 rounded-lg animate-pulse"></div>
      </div>
    ))}
  </section>
}