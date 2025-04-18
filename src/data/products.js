import Bag from './../assets/bag.png'
import BlueCoat from './../assets/coat.png'
import Camera from './../assets/Camera.png'
import Coffee from './../assets/coffee.png'
import Decor from './../assets/decor.png'
import Hanger from './../assets/hanger.png'
import Iphone from './../assets/iphone.png'
import Jacket from './../assets/jacket.png'
import Jar from './../assets/jar.png'
import Jar1 from './../assets/jar1.png'
import Lamp from './../assets/lamp.png'
import Laptop from '../assets/laptop.png'
import Mattress from './../assets/mattress.png'
import Mixer from './../assets/mixer.png'
import Phone from './../assets/Phone.png'
import Sofa from './../assets/sofa.png'
import Watch from './../assets/Watch.png'
import Thermos from './../assets/thermos.png'
import PhoneHolder from './../assets/phoneholder.png'
import DrillSet from './../assets/drillset.png'
import ToolKit from './../assets/toolkit.png'
import Huawei from './../assets/mate60pro.png'

export const products = [
    // ========== Automobiles ==========
    {
        id: 1,
        title: 'Car Accessories Organizer',
        category: 'Automobiles',
        brand: 'Generic',
        price: 29.99,
        originalPrice: 45.00,
        rating: 4.6,
        condition: 'Brand new',
        orders: 234,
        image: Hanger
    },
    {
        id: 2,
        title: 'LED Headlight Bulbs Kit',
        category: 'Automobiles',
        brand: 'Philips',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 189,
        image: Lamp
    },
    {
        id: 3,
        title: 'Car Phone Mount Holder',
        category: 'Automobiles',
        brand: 'Belkin',
        price: 12.99,
        originalPrice: 19.99,
        rating: 4.4,
        condition: 'Brand new',
        orders: 567,
        image: PhoneHolder
    },
    {
        id: 4,
        title: 'Car Vacuum Cleaner',
        category: 'Automobiles',
        brand: 'Dyson',
        price: 35.99,
        originalPrice: 49.99,
        rating: 4.3,
        condition: 'Refurbished',
        orders: 298,
        image: Mixer
    },

    // ========== Clothes and wear ==========
    {
        id: 5,
        title: "Men's Casual Jacket",
        category: 'Clothes and wear',
        brand: 'Levi\'s',
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.5,
        condition: 'Brand new',
        orders: 892,
        image: Jacket
    },
    {
        id: 6,
        title: "Designer Handbag",
        category: 'Clothes and wear',
        brand: 'Nike',
        price: 54.99,
        originalPrice: 79.99,
        rating: 4.8,
        condition: 'Brand new',
        orders: 1203,
        image: Bag
    },
    {
        id: 7,
        title: "Winter Blue Coat",
        category: 'Clothes and wear',
        brand: 'Ray-Ban',
        price: 24.99,
        originalPrice: 39.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 784,
        image: BlueCoat
    },
    {
        id: 8,
        title: "Luxury Wristwatch",
        category: 'Clothes and wear',
        brand: 'Burberry',
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 432,
        image: Watch
    },

    // ========== Computer and tech ==========
    {
        id: 9,
        title: 'Samsung Galaxy S23 Ultra',
        category: 'Computer and tech',
        brand: 'Samsung',
        price: 999.99,
        originalPrice: 1199.99,
        rating: 4.9,
        condition: 'Brand new',
        image: Phone
    },
    {
        id: 10,
        title: 'Apple iPhone 15 Pro',
        category: 'Computer and tech',
        brand: 'Apple',
        price: 1099.99,
        originalPrice: 1299.99,
        rating: 4.8,
        condition: 'Brand new',
        image: Iphone
    },
    {
        id: 11,
        title: 'Professional DSLR Camera',
        category: 'Computer and tech',
        brand: 'Canon',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 278,
        image: Camera
    },
    {
        id: 12,
        title: 'Huawei Mate 60 Pro',
        category: 'Computer and tech',
        brand: 'Huawei',
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 96,
        image: Huawei
    },

    // ========== Home interiors ==========
    {
        id: 13,
        title: 'Modern Table Lamp',
        category: 'Home interiors',
        brand: 'Ikea',
        price: 45.99,
        originalPrice: 69.99,
        rating: 4.5,
        condition: 'Brand new',
        orders: 345,
        image: Lamp
    },
    {
        id: 14,
        title: 'Luxury Sofa Set',
        category: 'Home interiors',
        brand: 'Ashley',
        price: 899.99,
        originalPrice: 1199.99,
        rating: 4.8,
        condition: 'Brand new',
        orders: 123,
        image: Sofa
    },
    {
        id: 15,
        title: 'Premium Mattress',
        category: 'Home interiors',
        brand: 'Wayfair',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 89,
        image: Mattress
    },
    {
        id: 16,
        title: 'Wall Art Decor',
        category: 'Home interiors',
        brand: 'DecoArt',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 234,
        image: Decor
    },

    // ========== Tools & equipment ==========
    {
        id: 17,
        title: '200-Piece Tool Kit Set',
        category: 'Tools & equipment',
        brand: 'Craftsman',
        price: 89.99,
        originalPrice: 129.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 189,
        image: ToolKit
    },
    {
        id: 18,
        title: 'Electric Drill Set',
        category: 'Tools & equipment',
        brand: 'Bosch',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.8,
        condition: 'Brand new',
        orders: 456,
        image: DrillSet
    },
    {
        id: 19,
        title: 'Premium Coffee Maker',
        category: 'Tools & equipment',
        brand: 'Fiskars',
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 321,
        image: Coffee
    },
    {
        id: 20,
        title: 'High-Performance Laptop',
        category: 'Computer and tech',
        brand: 'Dell',
        price: 299.99,
        originalPrice: 399.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 78,
        image: Laptop
    },

    // ========== Sports and outdoor ==========
    {
        id: 21,
        title: 'Insulated Thermos Flask',
        category: 'Sports and outdoor',
        brand: 'Coleman',
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 234,
        image: Thermos
    },
    {
        id: 22,
        title: 'Glass Storage Jar',
        category: 'Home interiors',
        brand: 'Trek',
        price: 499.99,
        originalPrice: 599.99,
        rating: 4.8,
        condition: 'Brand new',
        orders: 89,
        image: Jar
    },
    {
        id: 23,
        title: 'Decorative Glass Container',
        category: 'Home interiors',
        brand: 'Shimano',
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 123,
        image: Jar1
    },
    {
        id: 24,
        title: 'Yoga Mat',
        category: 'Sports and outdoor',
        brand: 'Manduka',
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 456,
        image: '/images/yoga-mat.jpg'
    },

    // ========== Animal and pets ==========
    {
        id: 25,
        title: 'Automatic Cat Feeder',
        category: 'Animal and pets',
        brand: 'PetSafe',
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 432,
        image: '/images/cat-feeder.jpg'
    },
    {
        id: 26,
        title: 'Dog Chew Toy Set',
        category: 'Animal and pets',
        brand: 'KONG',
        price: 12.99,
        originalPrice: 19.99,
        rating: 4.3,
        condition: 'Brand new',
        orders: 678,
        image: '/images/dog-toys.jpg'
    },
    {
        id: 27,
        title: 'Bird Cage',
        category: 'Animal and pets',
        brand: 'Prevue',
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.5,
        condition: 'Brand new',
        orders: 234,
        image: '/images/bird-cage.jpg'
    },
    {
        id: 28,
        title: 'Aquarium Starter Kit',
        category: 'Animal and pets',
        brand: 'Tetra',
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 123,
        image: '/images/aquarium-kit.jpg'
    },

    // ========== Machinery tools ==========
    {
        id: 29,
        title: 'Industrial Pressure Washer',
        category: 'Machinery tools',
        brand: 'Karcher',
        price: 459.99,
        originalPrice: 599.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 78,
        image: '/images/pressure-washer.jpg'
    },
    {
        id: 30,
        title: 'CNC Milling Machine',
        category: 'Machinery tools',
        brand: 'Haas',
        price: 9999.99,
        originalPrice: 11999.99,
        rating: 4.8,
        condition: 'Brand new',
        orders: 12,
        image: '/images/cnc-machine.jpg'
    },
    {
        id: 31,
        title: 'Hydraulic Lift',
        category: 'Machinery tools',
        brand: 'BendPak',
        price: 2999.99,
        originalPrice: 3999.99,
        rating: 4.6,
        condition: 'Brand new',
        orders: 34,
        image: '/images/hydraulic-lift.jpg'
    },
    {
        id: 32,
        title: 'Forklift',
        category: 'Machinery tools',
        brand: 'Toyota',
        price: 7999.99,
        originalPrice: 9999.99,
        rating: 4.7,
        condition: 'Brand new',
        orders: 56,
        image: '/images/forklift.jpg'
    }
];