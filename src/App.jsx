import React from "react";
import { useAuthStore } from "./stores/authStore";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import "./App.css";

const App = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <NewsFeed />
      </main>
    </div>
  );
};

export default App;
