import React from 'react'
import ProviderCard from '../ui/ProviderCard'

const Providers = () => {
    return (
        <div className="providers_section mt-20 mx-40">
            {/* headings */}
            <div className="headings space-y-2">
                <p className="text-lg text-[#2563EB] tracking-[5px] uppercase font-bold">meet the pros</p>
                <h2 className="text-3xl font-bold capitalize">Popular service providers</h2>
                <p className="text-lg text-[#64748B]">Skilled, reviewed, and ready to help.</p>
            </div>

            {/* providers cards */}
            <div className="providers-card grid grid-cols-4 gap-13 mt-5">
                <ProviderCard
                    name="Rajesh Sharma"
                    profession="Professional Plumber"
                    location="Kathmandu, Nepal"
                    rating={4.9}
                    jobs={238}
                    price={35}
                    availableToday={true}
                    profileHref="/providers/rajesh-sharma"
                />

                <ProviderCard
                    name="Aarav Thapa"
                    profession="Professional Electrician"
                    location="Lalitpur, Nepal"
                    rating={4.8}
                    jobs={156}
                    price={40}
                    availableToday={true}
                    profileHref="/providers/aarav-thapa" />

                <ProviderCard
                    name="Suman Gurung"
                    profession="Professional Cleaner"
                    location="Bhaktapur, Nepal"
                    rating={4.7}
                    jobs={192}
                    price={25}
                    availableToday={false}
                    profileHref="/providers/suman-gurung" />

                <ProviderCard
                    name="Prakash KC"
                    profession="Professional Carpenter"
                    location="Kathmandu, Nepal"
                    rating={4.9}
                    jobs={174}
                    price={45}
                    availableToday={true}
                    profileHref="/providers/prakash-kc" />
            </div>
        </div>
    )
}

export default Providers
