"use client"
import { menuItems } from "@/lib/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import { useFirebaseAuth } from "@/context/FirebaseAuthContext";
import { setCookie, getCookie, deleteCookie } from "cookies-next";


export default function Navbar({data}) {
  const { user, logout, loading } = useFirebaseAuth();
  const [isOpen, setIsOpen]  = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userBackend, setUserBackend] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const pageRef = useRef(null);
  const pathName = usePathname();
  const token = getCookie("user_token");

  console.log(user)

  useEffect(() => {
    function handleClick(event){
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
  }, []);
  

  useEffect(() => {
    if(token){
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if(data){
          setUserBackend(data)
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, []);


  const handleLogout = () => {
      logout();
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          deleteCookie("user_token", { path: "/" });
          setUserBackend("");
        })
        .catch((error) => {
          console.error(error);
        });
    }



  return (
    <header className="w-full bg-white sticky top-0 z-10" ref={pageRef}>
      <nav className="py-5 container-width">
        <div className="flex items-center justify-between relative">
          <a href="/">
            <Image className="" src={data.section_data.nav_logo} width={40} height={40} alt="Logo" unoptimized/>
          </a>

          <div>
            {!isOpen && <Menu className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && <X className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)}/> }
          </div>

          {/* desktop menu  */}
          <ul className="hidden font-medium lg:flex lg:items-center space-x-2"> 
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.href} className={`${menu.href === pathName ? "gradient-text" : ""} rounded-lg px-5 py-3 cursor-pointer text-black/90 text-lg`} >{menu.name}</Link>
              </li> 
            ))}

            {(userBackend || user) ? (
              <button
                onClick={handleLogout}
                className="gradient-button"
              >
                Logout {userBackend.name}
              </button>
            ) : (
              <button
                onClick={() => {
                  setAuthMode("login");
                  setShowModal(true);
                }}
                className="gradient-button"
              >
                Login
              </button>
            )} 
          </ul>
        </div>
      </nav>

      {/* mobile menu  */}
      <div className={`transition-all duration-300 overflow-hidden bg-gray-100 rounded-xs shadow-sm border border-gray-100 ${isOpen? "max-h-96 border-t": "max-h-0"}`}>
        <ul className="p-10 font-medium lg:hidden flex flex-col gap-4 max-w-70"> 
          {menuItems.map((menu) => (
            <li className={`${menu.href === pathName ? "bg-gray-200" : ""} py-2 rounded-lg`} key={menu.name}>
              <Link href={menu.href} className={` px-5 text-black/90 text-lg`}>{menu.name}</Link>
            </li>
          ))} 

          {(userBackend || user) ? (
              <button
                onClick={handleLogout}
                className="gradient-button"
              >
                Logout {userBackend.name}
              </button>
            ) : (
              <button
                onClick={() => {
                  setAuthMode("login");
                  setShowModal(true);
                }}
                className="gradient-button"
              >
                Login
              </button>
            )}
        </ul>
      </div>

      {showModal && (
        <AuthModal onClose={() => setShowModal(false)} >
          {authMode === "login" ? (
            <LoginForm closeModal={() => setShowModal(false)} switchToSignup={() => setAuthMode("signup")} setUserBackend={setUserBackend} user={user}/>
          ) : (
            <SignupForm closeModal={() => setShowModal(false)} switchToLogin={() => setAuthMode("login")} setUserBackend={setUserBackend}/>
          )}
        </AuthModal>
      )}
    </header>
  );
}