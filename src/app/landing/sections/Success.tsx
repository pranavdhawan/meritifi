export function Success() {
  return (
    <section id="success" className="w-[1440px] max-w-full mx-auto">
      <h2 className="ds-heading-2 text-center pt-[60px]">When you Make Merit Yours</h2>
      <div className="mt-[60px] px-[80px] grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-3 max-sm:px-6">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-[#F5F2ED]/40 rounded-[10.8px] p-6">
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="w-5 h-5 bg-[#F1C76F] rounded-sm" />
              ))}
            </div>
            <p className="ds-body-2 text-[#413D45] mb-4">&quot;Headspace gives me a slice of the day that&apos;s just for me.&quot;</p>
            <div className="text-sm">
              <p className="ds-body-3 font-semibold text-[#1B1819]">Nadien, New Mexico</p>
              <p className="ds-body-3 text-[#413D45]">on prioritizing self-care</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


