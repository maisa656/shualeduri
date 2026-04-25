import React, { useState } from 'react'

export default function Main({ quantity, setQuantity, setShowCartLabel }) {

    const [count, setCount] = useState(0)
    const [index, setIndex] = useState(0)

    const handleDecrese = () => {
        setCount(prev => {
            if (prev === 0) {
                return 0
            } else {
                return prev - 1
            }
        })
    }

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleAddToCart = () => {
        setShowCartLabel(true)
        setQuantity(count)
    }

    const slideImages = [
        '/pirveli.png',
        '/meore.png',
        '/mesame.png',
        '/meotxe.png'
    ]

    const handleNext = () => {
        setIndex(prev => (prev + 1) % slideImages.length)
    }

    const handlePrev = () => {
        setIndex(prev => prev === 0 ? slideImages.length - 1 : prev - 1)
    }

    const handleThumbnailClick = (i) => {
        setIndex(i)
    }

    return (
        <div>
            <h1>Slider</h1>

            <div className='relative size-87.5 overflow-hidden'>
                <button onClick={handlePrev} className='lg:hidden bg-gray-200 absolute top-1/2 left-4 -translate-y-1/2 z-10 transition-transform hover:scale-110 active:scale-95'>Prev</button>
                
                <div 
                    className='flex h-full transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {slideImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={i}
                            className='w-full h-full flex-shrink-0'
                        />
                    ))}
                </div>
                
                <button onClick={handleNext} className='lg:hidden bg-gray-200 absolute top-1/2 right-4 -translate-y-1/2 z-10 transition-transform hover:scale-110 active:scale-95'>Next</button>
            </div>
                
            <div className='hidden mt-2 lg:flex gap-2 size-22'>
                {slideImages.map((img, i) => (
                    <img 
                        key={i}
                        src={img} 
                        alt={i} 
                        className={`size-full rounded-md border-green-500 transition-all duration-200 cursor-pointer ${i === index ? 'border-4 scale-105' : 'border-2 opacity-70 hover:opacity-100'}`}
                        onClick={() => handleThumbnailClick(i)}    
                    />
                ))}
            </div>

            <div>
                <div className='flex items-center gap-2'>
                    <button onClick={handleDecrese} className='font-bold text-5xl'>-</button>
                    <h2 className='text-3xl'>{count}</h2>
                    <button onClick={handleIncrease} className='font-bold text-5xl'>+</button>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}