import { User } from "lucide-react";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  login: (userData) => {
    const loginData = {
      fullName: userData.fullName,
      email: userData.email,
      timestamp: new Date().toISOString(),
      loginId: Math.random().toString(36).substr(2, 9),
      status: 'authenticated'
    };
    
    // Log to console in JSON format
    console.log('==================================');
    console.log('📋 LOGIN DATA (JSON FORMAT)');
    console.log('==================================');
    console.log(JSON.stringify(loginData, null, 2));
    console.log('==================================');
    
    // Store in localStorage
    const loginHistory = JSON.parse(localStorage.getItem('loginHistory') || '[]');
    loginHistory.push(loginData);
    localStorage.setItem('loginHistory', JSON.stringify(loginHistory));
    
    set({ user: loginData, isLoggedIn: true });
  },
  logout: () => {
    console.log('📤 User logged out at', new Date().toISOString());
    set({ user: null, isLoggedIn: false });
  }
}));