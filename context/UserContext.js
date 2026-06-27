"use client"
import { getCookie } from 'cookies-next';
import { createContext, useContext, useEffect, useState } from 'react';

// const SidebarContext = createContext();

export const UserContext = createContext();

export function UserProvider({children}) {
  const token = getCookie("user_token");
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('useeffect')
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

  return (
    <UserContext.Provider value={user}>
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