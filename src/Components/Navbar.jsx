"use client";
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Image from 'next/image';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const openMenu = () => {
        setOpen(!open);
    };

    return (
        <div className={`${open ? 'fixed top-0 left-0 z-50' : 'relative'
            } flex justify-between bg-[#1E1E1E] w-full px-4 md:px-10 py-4 items-center`}>
            <div className='flex'>
                <img src="logo.svg" alt="" />
            </div>

            <div className='hidden md:flex gap-12 items-center text-white'>
                <a href="" className=''>
                    Home
                </a>
                <a href="" className='flex items-center gap-1'>
                    Services
                    <IoIosArrowDown />

                </a>
                <a href="" className='flex items-center gap-1'>
                    Industries
                    <IoIosArrowDown />
                </a>
                <a href="/career">Career</a>
            </div>


            <button className='hidden md:block border border-sky-400 px-4 py-2 text-white hover:ring-2 rounded ring-sky-600 relative overflow-hidden group hover:bg-sky-400 transition-all duration-300'>
                Contact Us
                <div className='w-8 h-8 bg-sky-400 absolute bottom-0 right-0 transform translate-x-[70%] translate-y-[50%] rotate-45 hover:scale-125 transition-all duration-100 '></div>

            </button>

            <button className='md:hidden  text-2xl'

                onClick={openMenu}
            >
                {open ? <FiX color='white' /> : <FiMenu color='white' />}
            </button>

            {
                open && (
                    <div className='fixed w-full h-full bg-[#1e1e1e] top-20 right-0 z-50'>
                        <div className='flex flex-col gap-4 text-xl font-semibold text-right text-white items-center'>
                            <a href="">Home</a>
                            <a href="">Services</a>
                            <a href="">Industires</a>
                            <a href="">Career</a>


                            <button className='px-6 py-2 mt-4 border border-sky-400 '>
                                Contact Us
                            </button>
                        </div>

                    </div>
                )
            }

        </div>
    )
}

export default Navbar