import React from 'react'
import {useState,useEffect} from 'react'

const carausel = () => {
    const [visibleItem,setVisibleItem] = useState(1);

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
      
    </div>
  )
}

export default carausel
