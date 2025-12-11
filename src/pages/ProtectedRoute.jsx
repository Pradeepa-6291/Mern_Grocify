import React from 'react'
import { Navigate } from 'react-router-dom';


export default function ProtectedRoute() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <div>
        {isLoggedIn?children:<Navigate to="/login"/> }
      
    </div>
  )
}
