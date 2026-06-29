"use client"
import { auth } from '@/lib/firebase';
import { getCookie, setCookie } from 'cookies-next';
import { getRedirectResult, onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({children}) {
  const token = getCookie("user_token");
  const [user, setUser] = useState(null);
  const [isInitialized , setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if(token){
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          next: { revalidate: false }
        },
      })
      .then((response) => response.json())
      .then((data) => {
        if(data){
          setUser(data)
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, []);


  useEffect(() => {
    async function handleRedirect() {
      try{
        const res = await getRedirectResult(auth);
        console.log(res);

        const resbackend = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/loginwithgoogle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({"token" : res.currentUser.accessToken}),
        });
  
        const resData = await resbackend.json();
        setCookie("user_token", resData.data.token);
        setUser(resData.data.user)
      }catch (error){
        console.log(error)
      }
    }

    handleRedirect();
  }, []);

  return (
    <UserContext.Provider value={{user, isInitialized}}>
      {children}
    </UserContext.Provider>
  );
}


// export const useUserContext = () => useContext(UserContext);

// function SidebarNav() {
//   let { isOpen } = useContext(SidebarContext);

//   return (
//     <div>
//       <p>Home</p>

//       {isOpen && <Subnav />}
//     </div>
//   );
// }