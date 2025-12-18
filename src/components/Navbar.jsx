import React from 'react'
import { Newspaper, LogOut } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const Navbar = () => {
    const { user, logout } = useAuthStore();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Newspaper size={28} />
          <h1 className="text-2xl font-bold">News Hub</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm opacity-90">Welcome</p>
            <p className="font-semibold">{user?.fullName}</p>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar