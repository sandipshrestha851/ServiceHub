import React from 'react'
import {Star} from 'lucide-react'

const ServiceCard = () => {
  return (
    <div className="h-fit border bg-white rounded-xl cursor-pointer pb-7">
        {/* image */}
      <div className="image aspect-video w-full rounded-t-2xl overflow-hidden">
        <img src="/images/sample.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* description */}
      <div className="description pl-5 pt-2.5">
        <h1 className="title mb-0.5 text-lg font-bold">Cheapest plumbing here</h1>
        <p className="category-name mb-0.5 text-[14px] text-[#64748B]">Plumbing</p>

        <div className="ratings mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-[#ffb900] text-[#ffb900]" />
          <span className="text-sm font-bold">5</span>
          <span className="text-sm text-[#64748B]">(23)</span>
        </div>

        <p className="price flex items-baseline gap-2">
          <span className="text-[#64748B] text-sm">Rs</span>
          <span className="text-xl font-bold">1,000</span>
          <span className="text-[#64748B] text-sm">/unit</span>
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
