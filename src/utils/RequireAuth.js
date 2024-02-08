import React from 'react'
import { useAuth } from "./auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export const RequireAuth = ({ children }) => {
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(auth.user)
        if(auth.user === null){
            navigate("/login")
        }
    },[])
    
  return children
}
