"use client"
import { menuItems } from "@/lib/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen]  = useState(false);
  const [selected, setSelected]  = useState(menuItems[0].name);
  const testRef = useRef(null);

  useEffect(() => {
    function handleClick(event){
      if (testRef.current && !testRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="w-full bg-white sticky top-0 z-10" ref={testRef}>
      <nav className="py-5 container-width">
        <div className="flex items-center justify-between relative">
          <a href="/">
            <Image className="" src="/assets/logo-light.png" width={40} height={40} alt="Logo"/>
          </a>

          <div>
            {!isOpen && <Menu className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && <X className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)}/> }
          </div>

          {/* desktop menu  */}
          <ul className="hidden font-medium lg:flex space-x-2"> 
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <a className={`${menu.name === selected ? "bg-gray-200" : ""} rounded-lg px-5 py-3 cursor-pointer text-black/90 text-lg`} onClick={() => setSelected(menu.name)} >{menu.name}</a>
              </li> 
            ))}
          </ul>
        </div>
      </nav>

      {/* mobile menu  */}
      <div className={`transition-all duration-300 overflow-hidden bg-gray-100 rounded-xs shadow-sm border border-gray-100 ${isOpen? "max-h-96 border-t": "max-h-0"}`}>
        <ul className="p-10 font-medium lg:hidden flex flex-col gap-4"> 
          {menuItems.map((menu) => (
            <li className={`${menu.name === selected ? "bg-gray-200" : ""} py-2 rounded-lg`} key={menu.name}>
              <a className={` px-5 text-black/90 text-lg`} onClick={() => setSelected(menu.name)}>{menu.name}</a>
            </li>
          ))} 
        </ul>
      </div>
    </header>
  );
}