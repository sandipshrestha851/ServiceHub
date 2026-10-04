import React from 'react'
import ServiceCard from './ServiceCard'
import {Wrench} from 'lucide-react'

const Services = () => {
    return (
        <div className="services">
            <div className="headers">
                <p>EXPLORE SERVICES</p>
                <h2>What can we help with?</h2>
                <p>Whatever the job find the right person for it.</p>
            </div>
            <div className="services-container">
                <ServiceCard
                title="Plumbing"
                description="leaks,repairs and installations"
                providers = {146}
                icon = {Wrench}
                />
            </div>
        </div>
    )
}

export default Services
