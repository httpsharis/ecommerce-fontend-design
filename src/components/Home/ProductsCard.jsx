import React from 'react'
import Sofa from '../../assets/sofa.png'
import Jar from '../../assets/jar.png'
import Lamp from '../../assets/lamp.png'
import Mixer from '../../assets/mixer.png'
import Decor from '../../assets/decor.png'
import Hanger from '../../assets/hanger.png'
import CoffeMachine from '../../assets/coffee.png'
import Mattress from '../../assets/mattress.png'

// Array of product objects with name, price, and image
const products = [
    { 
        name: 'Soft Chair', 
        price: 'From USD 19', 
        image: Sofa,
    },
    { 
        name: 'Kitchen Mixer', 
        price: 'From USD 100', 
        image: Mixer,
    },
    { 
        name: 'Lamp', 
        price: 'From USD 34', 
        image: Lamp,
    },
    { 
        name: 'Jar', 
        price: 'From USD 10', 
        image: Jar,
    },
    { 
        name: 'Coffe Machine', 
        price: 'From USD 10', 
        image: CoffeMachine,
    },
    { 
        name: 'Matress', 
        price: 'From USD 10', 
        image: Mattress,
    },
    { 
        name: 'Decor', 
        price: 'From USD 10', 
        image: Decor,
    },
    { 
        name: 'Clothes Hanger', 
        price: 'From USD 12', 
        image: Hanger,
    }
]

// Functional component to display product cards
function ProductsCard() {
    return (
        <div className="flex-1 bg-white border-gray-200 w-full">
            <div className="grid grid-cols-4 h-full">
                {products.map((product, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col p-4
                                  ${(index + 1) % 4 !== 0 ? 'border-r border-gray-200' : ''}`}
                    >
                        <div className="flex flex-col">
                            <h3 className="text-[14px] text-gray-600">{product.name}</h3>
                            <p className="text-[10px] text-gray-500">{product.price}</p>
                        </div>
                        <div className="mt-auto self-end">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-[56px] h-[56px] object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsCard