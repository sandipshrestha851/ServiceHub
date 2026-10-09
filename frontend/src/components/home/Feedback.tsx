import React from 'react'
import {Star} from 'lucide-react'

const Feedback = () => {
  return (
    <section className="mt-20 mx-40">
        {/* header */}
        <div className="headers space-y-2.5">
            {/* part-1 */}
            <div className="part-1">
                <p className="tracking-[5px] uppercase text-[#2563EB] text-lg">loved by customers</p>
            </div>

            {/* part-2 */}
            <div className="part-2 space-y-2.5 flex justify-between">
                <h2 className="text-3xl font-bold">What people are saying</h2>
                <p className="flex text-sm gap-1 justify-center items-center">
                    <Star fill="#ffb900" size={16} color="#ffb900" />
                    <span className="rating font-semibold mr-1"> 4.9 </span>
                    <span className="text-[#64748B]">from 2,000+ reviews</span>
                </p>
            </div>
        </div>
        <div className="FeedbackContainer">
            
        </div>
    </section>
  )
}

export default Feedback
