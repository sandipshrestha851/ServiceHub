import React from 'react'
import {Star} from 'lucide-react'

const ServiceCard = () => {
  return (
    <div className="border bg-white rounded-2xl">
        {/* image */}
      <div className="image h-1/2 w-full rounded-2xl">
        <img src="/images/sample.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* description */}
      <div className="description">
        <h1 className="title">Cheapest pubmling here</h1>
        <p className="category-name">Plumbing</p>

        <div className="ratings flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>5</span>
          <span className="text-sm text-gray-500">(23)</span>
        </div>

        <p className="price"></p>
      </div>
    </div>
  )
}

export default ServiceCard
