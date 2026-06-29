"use client"
import { menuItems } from "@/lib/data";
import { Loader, Menu, X } from "lucide-react";
import Image from "next/image";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from "next/link";
import AuthModal from "./auth/AuthModal";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import { useFirebaseAuth } from "@/context/FirebaseAuthContext";
import { setCookie, getCookie, deleteCookie } from "cookies-next";
import UserDetails from "./auth/UserDetails";
import { UserContext, UserProvider, useUserContext } from "@/context/UserContext";
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, getAuth } from "firebase/auth";



export default function Navbar({data}) {
  const {logout, loading} = useFirebaseAuth();
  const [isOpen, setIsOpen]  = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userBackend, setUserBackend] = useState(null);
  const [authMode, setAuthMode] = useState("login");
  const pageRef = useRef(null);
  const pathName = usePathname();
  const token = getCookie("user_token");


  let {user, isInitialized} = useContext(UserContext);

  // console.log(values)
  // console.log('nav-bar' , isInitialized)
  const [isClient, setIsClient] = useState(false);


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    function handleClick(event){
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        setShowUserModal(false);
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  

  useEffect(() => {
    setUserBackend(user);
    // console.log('useeffect')
    // if(token){
    //   fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user`, {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': `Bearer ${token}`,
    //       'Accept': 'application/json',
    //       next: { revalidate: false }
    //     },
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if(data){
    //       setUserBackend(data)
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // }
  }, [user]);
  

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
      setUserBackend(null);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <header className="w-full bg-white sticky top-0 z-10" ref={pageRef}>
      <nav className="py-5 container-width">
        {/* {token && <h2>Login</h2>} */}
        <div className="flex items-center justify-between relative">
          <a href="/">
            <Image className="" src={data.section_data.nav_logo} width={40} height={40} alt="Logo" unoptimized/>
          </a>

          <div>
            {!isOpen && <Menu className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)} />}
            {isOpen && <X className="lg:hidden" size={40} onClick={() => setIsOpen(!isOpen)}/> }
          </div>

          {/* desktop menu  */}
          <ul className="hidden font-medium lg:flex lg:items-center space-x-2" > 
            {menuItems.map((menu) => (
              <li key={menu.id}>
                <Link href={menu.href} className={`${menu.href === pathName ? "gradient-text" : ""} rounded-lg px-5 py-3 cursor-pointer text-black/90 text-lg`} >{menu.name}</Link>
              </li> 
            ))}
            
            { isInitialized && 
              <div>
                {token  ? (
                  <div>
                    <div className="w-22 flex justify-center">
                      <Image onClick={() => setShowUserModal(prev => !prev)} className="cursor-pointer" src="/assets/img/user.png" width={35} height={35} alt="Logo" unoptimized/>
                    </div>

                    {showUserModal && (
                      <UserDetails user={userBackend} handleLogout={handleLogout} />
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setAuthMode("login");
                      setShowModal(true);
                    }}
                    className="gradient-button w-22"
                  >
                    Login
                  </button>
                )} 
              </div>
            }

            {!isInitialized && 
              <div className="w-22 flex justify-center">
                <Loader />
              </div>
            }
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

          {(userBackend) ? (
            <button
            onClick={handleLogout}
            className="gradient-button"
            >
                Logout
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
            <LoginForm closeModal={() => setShowModal(false)} switchToSignup={() => setAuthMode("signup")} setUserBackend={setUserBackend}/>
          ) : (
            <SignupForm closeModal={() => setShowModal(false)} switchToLogin={() => setAuthMode("login")} setUserBackend={setUserBackend}/>
          )}
        </AuthModal>
      )}
    </header>
  );
}