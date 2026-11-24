import React from 'react'
import CategoryCard from '../ui/CategoryCard'
import {
    Wrench,
    Zap,
    Sparkles,
    Package,
    House,
    SlidersHorizontal,
    Briefcase,
    Users
} from "lucide-react";

const Services = () => {
    return (
        <div className="services mt-20 mx-40" id="services">
            <div className="headers flex flex-col gap-2.5">
                <p className="text-[#2563EB] font-smooch text-xl font-semibold tracking-[5px]">EXPLORE SERVICES</p>
                <h2 className="text-3xl font-bold font-poppins">What can we help with?</h2>
                <p className="text-[#64748B] font-poppins">Whatever the job find the right person for it.</p>
            </div>
            <div className="services-container mt-5 grid grid-cols-4 gap-5">

                <CategoryCard
                    title="Plumbing"
                    description="Leaks,repairs and installations"
                    providers={146}
                    icon={Wrench}
                />

                <CategoryCard
                    title="Electrical"
                    description="Safe fixes & smart upgrades"
                    providers={96}
                    icon={Zap}
                />

                <CategoryCard
                    title="Cleaning"
                    description="Fresh spaces, less stress"
                    providers={214}
                    icon={Sparkles}
                />

                <CategoryCard
                    title="Carpentry"
                    description="Built beautifully for you"
                    providers={74}
                    icon={Package}
                />

                <CategoryCard
                    title="Appliance Repair"
                    description="Keep your home running"
                    providers={89}
                    icon={House}
                />

                <CategoryCard
                    title="Painting"
                    description="Color your world"
                    providers={61}
                    icon={SlidersHorizontal}
                />

                <CategoryCard
                    title="Vehicle Repair"
                    description="Back on the road quickly"
                    providers={52}
                    icon={Briefcase}
                />

                <CategoryCard
                    title="Computer Repair"
                    description="Tech help that makes sense"
                    providers={43}
                    icon={Users}
                />
            </div>
        </div>
    )
}

export default Services
