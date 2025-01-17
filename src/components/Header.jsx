import React from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../Authentication/auth";


function Header() {
    const navigate = useNavigate();

    const handleLogout = async () => {
      await logoutUser();
      navigate("/login");
    };
  return (
    <>
    <header className="bg-gray-800 text-white h-16 flex items-center justify-between px-6">
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
        >
          LogOut
        </button>
      </header>
      </>
  )
}

export default Header