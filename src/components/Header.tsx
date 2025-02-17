'use client'

/* eslint-disable @next/next/no-img-element */
import { NavLinks } from '@/constatns/NavLinks'
import React, { useEffect, useState } from 'react'
import { FaListUl } from 'react-icons/fa';
import { motion } from "framer-motion";
import { ImCross } from 'react-icons/im';
import Link from 'next/link';

export default function Header() {
  const isGhDeployment: boolean = process.env.NODE_ENV === "production";
  const basePath: string = process.env.basePath || "";
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function handleMousedownEvent(e: MouseEvent) {
    const target = e.target as HTMLElement;   
    if (isSidebarOpen && target.id != "sidebar" && target.id != "link") {     
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleMousedownEvent);
  }, [isSidebarOpen])

  useEffect(()=>{
    return window.removeEventListener("mousedown", handleMousedownEvent);
  }, [])

  return (

    <div className='w-full bg-secondary flex items-center h-20'>
      <Link href='/' className='w-40 ml-2 mr-6 shrink-0 rounded overflow-hidden'>
        <img className='w-full object-scale-down' src={`${isGhDeployment ? basePath : ''}/images/tawaanzo-logo.jpg`} alt="Tawaanzo" />
      </Link>

      <div className='w-full h-full items-center 2xs:hidden md:flex'>
        {
          NavLinks.map((navLink) => {
            return (
              <a href={navLink.href} key={navLink.text} className='text-white pr-5 font-medium text-lg hover:text-primary transition-colors duration-200'>
                {navLink.text}
              </a>
            );
          })
        }
      </div>

      <div className='w-full 2xs:flex md:hidden justify-end px-4'>
        <div onClick={(e) => { setIsSidebarOpen(true); e.stopPropagation() }} className='hover:cursor-pointer w-10 aspect-square rounded-md bg-primary text-white flex items-center justify-center text-2xl'>
          <FaListUl />
        </div>

        {
          isSidebarOpen &&
          <div>
            <motion.div
              id='sidebar'
              initial={{ x: "+100%" }}
              animate={{ x: 0 }}
              exit={{ x: "+100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-5 z-50">
              {/* Close Button */}
              <button onClick={() => setIsSidebarOpen(false)} className="p-2 bg-primary text-white absolute top-3 right-3">
                <ImCross />
              </button>

              {/* Navigation Links */}
              <div className="mt-14 flex flex-col">
                {
                  NavLinks.map((navLink) => {
                    return (
                      <a id='link' href={navLink.href} key={navLink.text} className='text-secondary py-2 font-medium text-lg hover:text-primary transition-colors duration-200'>
                        {navLink.text}
                      </a>
                    );
                  })
                }
              </div>
            </motion.div>
          </div>
        }
      </div>
    </div>
  )
}
