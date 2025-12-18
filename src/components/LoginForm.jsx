import { useState } from "react";
import { useAuthStore } from "../stores/authStore";
import { Mail, Lock, User, LogIn } from "lucide-react";

const LoginForm = () => {
    const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const { login } = useAuthStore();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email required';
    if (formData.password.length < 6) newErrors.password = 'Password must be 6+ characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      login(formData);
      setFormData({ fullName: '', email: '', password: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md backdrop-blur-lg bg-opacity-95">
        <div className="flex justify-center mb-8">
          <div className="bg-blue-600 p-3 rounded-full">
            <LogIn className="text-white" size={24} />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Welcome</h1>
        <p className="text-center text-gray-600 mb-8">Sign in to access news</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-blue-600" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Mahesh Dhole"
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-blue-600" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mahesh@example.com"
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-blue-600" size={20} />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-6">
          Demo credentials work with any valid email
        </p>
      </div>
    </div>
  )
}

export default LoginForm