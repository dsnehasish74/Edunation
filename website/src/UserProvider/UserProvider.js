import React, { useContext, useEffect, useState } from 'react'
const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export function useUser() {
      return useContext(UserContext)
}

export function useUpdateUser() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
      const [user,setUser]=useState();
    
      useEffect(() => {
            setUser(localStorage.getItem("edunation-profile"));
      },[]);

      const updateUser=()=>{
        setUser(localStorage.getItem("edunation-profile"));
        console.log("Inside updateUser().....");
      }
    
      return (
        <UserContext.Provider value={user}>

          <UserUpdateContext.Provider value={updateUser}>
            {children}

          </UserUpdateContext.Provider>

        </UserContext.Provider>

      )
    }