import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import { Eye, EyeOff } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/admin/data');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white">
      <form onSubmit={handleSubmit} className="bg-white px-8 py-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
            />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <div className="relative">
    <input
      type={showPassword ? 'text' : 'password'}
      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 outline-none pr-10"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="********"
      required
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
