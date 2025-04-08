import React from 'react'
import { FaLock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";

function CartServices() {
  const services = [
    {
      icon: <FaLock className="text-gray-600 text-xl" />,
      title: 'Secure payment',
      description: 'Have you ever finally just'
    },
    {
      icon: <BiSupport className="text-gray-600 text-xl" />,
      title: 'Customer support',
      description: 'Have you ever finally just'
    },
    {
      icon: <FaTruck className="text-gray-600 text-xl" />,
      title: 'Free delivery',
      description: 'Have you ever finally just'
    }
  ]

  return (
    <div className="flex mt-8 rounded-lg p-2">
      {services.map((service, index) => (
        <div key={index} className="flex mr-11 items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-full">
            {service.icon}
          </div>
          <div>
            <h3 className="text-[15px] font-medium text-gray-800">{service.title}</h3>
            <p className="text-[13px] text-gray-500">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartServices