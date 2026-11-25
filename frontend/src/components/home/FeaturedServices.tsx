import React from 'react'
import ServiceCard from '../ui/ServiceCard'

const FeaturedServices = () => {
    return (
        <div className="mt-20 mx-40">
            {/* cards */}
            <div className="cards grid grid-cols-4 gap-8">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div>
    )
}

export default FeaturedServices
