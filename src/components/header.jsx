import React, { useState } from 'react'

export default function Header({ quantity, showCartLabel }) {

    const [isOpen, setIsOpen] = useState(false)
    const [showCartItem, setShowCartItem] = useState(false)

    const navItems = [
        {
            path: '#',
            label: "Collections"
        },
        {
            path: '#',
            label: "Men"
        },
        {
            path: '#',
            label: "Woman"
        },
        {
            path: '#',
            label: "About"
        },
        {
            path: '#',
            label: "Contact"
        },
    ]

    return (
        <>
            <div className='px-4 py-2 flex justify-between'>
                <div className='flex gap-2'>
                    <button className='lg:hidden' onClick={() => setIsOpen(true)}>Burger</button>
                    <img src="/sneakers.png" alt="" />

                </div>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-2 '>
                        {navItems.map(navItem => (
                            <a className='text-base font-bold' href={navItem.path}>{navItem.label}</a>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <div className='relative'>
                        <img onClick={() => setShowCartItem(!showCartItem)} src="/cart.png" alt="" />
                        {showCartLabel && <span className='rounded-xl px-1 py-0.5 bg-red-500 text-white absolute -top-2.5 left-3/4 text-xs'>{quantity}</span>}
                        {showCartItem && <div className='fixed left-1/2 -translate-x-1/2  top-8 bg-white border-2 w-11/12 h-[200px]'>
                                <h1>Cart Items</h1>
                            </div>}
                    </div>
                    <h2>UserImg</h2>
                </div>
            </div>
            {isOpen && <div onClick={() => setIsOpen(false)} className='absolute inset-0 bg-black/40 z-40' />}
            <div className={`p-4 fixed w-3/4 h-screen bg-white top-0 left-0 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-200`}>
                <button onClick={() => setIsOpen(false)}>X</button>
                <ul className='flex flex-col gap-2 '>
                    {navItems.map(navItem => (
                        <a className='text-base font-bold' href={navItem.path}>{navItem.label}</a>
                    ))}
                </ul>
            </div>
        </>
    )
}