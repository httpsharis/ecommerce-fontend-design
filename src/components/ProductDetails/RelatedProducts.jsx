import React from 'react'

function RelatedProducts() {
  const products = [
    { name: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50', image: 'path/to/image1.jpg' },
    { name: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50', image: 'path/to/image2.jpg' },
    { name: 'Apple Watch Series Space Gray', price: '$7.00 - $99.50', image: 'path/to/image3.jpg' },
    { name: 'Basketball Crew Socks Long Stuff', price: '$7.00 - $99.50', image: 'path/to/image4.jpg' },
    { name: "New Summer Men's castrol T-Shirts", price: '$7.00 - $99.50', image: 'path/to/image5.jpg' },
  ]

  return (
    <div className="w-[220px]"> 
      <h3 className="text-lg font-semibold mb-4">You may like</h3>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index} className="flex items-start gap-3"> 
            <img src={product.image} alt={product.name} className="w-15 h-15 object-cover rounded" /> 
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800 justify-items-start">{product.name}</p>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RelatedProducts