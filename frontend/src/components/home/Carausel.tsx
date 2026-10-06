import React from 'react'
import { useState, useEffect } from 'react'
import { Search, MapPin } from 'lucide-react'

const carausel = () => {
    const [visibleItem, setVisibleItem] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisibleItem(item => {
                if (item < 5) {
                    return item + 1;
                } else {
                    return 1;
                }
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carausel-container h-100 relative">
            <div className={`${visibleItem == 1 ? "visible" : "invisible"} carauselItem-1 w-full absolute inset-0 h-full`}>
                <img src="/images/carausel-images/item-1.png" alt="" className="object-cover h-full w-full" />
            </div>

            <div className={`${visibleItem == 2 ? "visible" : "invisible"} carauselItem-2 w-full absolute inset-0
       h-full`}>
                <img src="/images/carausel-images/item-2.png" alt="" className="object-cover h-full w-full" />
            </div>

            <div className={`${visibleItem == 3 ? "visible" : "invisible"} carauselItem-3 w-full absolute inset-0
       h-full`}>
                <img src="/images/carausel-images/item-3.png" alt="" className="object-cover h-full w-full" />
            </div>

            <div className={`${visibleItem == 4 ? "visible" : "invisible"} carauselItem-4 w-full absolute inset-0
       h-full`}>
                <img src="/images/carausel-images/item-4.png" alt="" className="object-cover h-full w-full" />
            </div>

            <div className={`${visibleItem == 5 ? "visible" : "invisible"} carauselItem-5 w-full absolute inset-0
       h-full`}>
                <img src="/images/carausel-images/item-5.png" alt="" className="object-cover h-full w-full" />
            </div>

            <div className="search-text absolute w-180 px-7 py-10 flex flex-col items-center justify-between gap-10 ml-20 top-1/2 -translate-y-1/2">
                <div className="bg-black w-full h-full absolute opacity-40 inset-0 z-0 rounded-[10px]"></div>
                <h1 className="text text-white text-5xl font-bold w-148 z-10">Find trusted professionals for <span className="text-[#2563EB]">every job.</span></h1>

                <div className="search-section relative flex bg-white w-148 h-16 items-center rounded-full z-10">
                    <div className="long-part w-[70%]">
                        <input type="text" name="serch-services" id="" className="border-r border-r-[#E2E8F0] p-2.5 w-full pl-6 text-lg outline-none focus:outline-none focus:ring-0" placeholder="What can we help you with?" />
                    </div>
                    <div className="location-part w-[20%] flex items-center pl-2 mr-1">
                        <MapPin className="w-11" />
                        <input type="text" name="" id="" className="p-1 w-full text-lg outline-none focus:outline-none focus:ring-0" placeholder="zip code" />
                    </div>
                    <div className="search-icon bg-[#2563EB] rounded-full p-2.5 cursor-pointer hover:bg-[hsl(221,83%,43%)]">
                        <Search className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default carausel
