import React from 'react'
import {Search,UserRound,Calendar,Check} from 'lucide-react'

const steps = () => {
  return (
    <div className="steps mt-20 px-40 flex flex-col items-center bg-white py-20 border border-t-[#e2e8f0] border-b-[#E2E8F0]">
      <div className="headers flex flex-col items-center gap-1.5"> 
        <p className="text-lg text-[#64748B] font-semibold tracking-[3px] uppercase">simple by design</p>
        <h2 className="text-3xl font-bold">Get it done four easy steps</h2>
      </div>
      <div className="stepCards mt-5 grid grid-cols-4 w-full mx-auto">
            <div className="step1 flex flex-col items-center w-full p-4 gap-2">
                <div className="icon rounded-2xl p-4 bg-blue-50 text-blue-500">
                    <Search/>
                </div>
                <div className="steps-info flex flex-col items-center gap-2">
                    <p className="number text-[#64748B] font-medium">01</p>
                    <h3 className="step-name text-lg font-bold">Search for a service</h3>
                    <p className="step-description text-sm text-[#64748B] text-center">Tell us what you need and where you need it.</p>
                </div>
            </div>
            
            <div className="step2 flex flex-col items-center w-full p-4 gap-2">
                <div className="icon rounded-2xl p-4 bg-blue-50 text-blue-500">
                    <UserRound/>
                </div>
                <div className="steps-info flex flex-col items-center gap-2">
                    <p className="number text-[#64748B] font-medium">02</p>
                    <h3 className="step-name text-xl font-bold">Choose a provider</h3>
                    <p className="step-description text-sm text-[#64748B] text-center">Compare profiles, reviews, and transparent pricing.</p>
                </div>
            </div>
            
            <div className="step3 flex flex-col items-center w-full p-4 gap-2">
                <div className="icon rounded-2xl p-4 bg-blue-50 text-blue-500">
                    <Calendar/>
                </div>
                <div className="steps-info flex flex-col items-center gap-2">
                    <p className="number text-[#64748B] font-medium">03</p>
                    <h3 className="step-name text-xl font-bold">Book a service</h3>
                    <p className="step-description text-sm text-[#64748B] text-center">Pick a time that works for your schedule.</p>
                </div>
            </div>
            
            <div className="step4 flex flex-col items-center w-full p-4 gap-2">
                <div className="icon rounded-2xl p-4 bg-blue-50 text-blue-500">
                    <Check/>
                </div>
                <div className="steps-info flex flex-col items-center gap-2">
                    <p className="number text-[#64748B] font-medium">04</p>
                    <h3 className="step-name text-xl font-bold">Get the job done</h3>
                    <p className="step-description text-sm text-[#64748B] text-center">Relax while a trusted pro takes care of it.</p>
                </div>
            </div>
            
            
      </div>
    </div>
  )
}

export default steps
