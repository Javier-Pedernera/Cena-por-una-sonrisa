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

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Formato de correo inválido');
      return;
    }

    try {
      await login(email, password);
      navigate('/admin/data');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form onSubmit={handleSubmit} className="bg-[#fcfcfc] border-1 border-[#06C8BE] px-8 py-10 rounded-2xl shadow-lg w-full max-w-md">
        <div className="flex justify-center">
        <svg
                className="w-25"
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                viewBox="0 0 74 82.839"
              >
                <path
                  id="Trazado_1"
                  data-name="Trazado 1"
                  d="M0,82.839H74V0H0Zm69.889-4.111H4.111V4.111H69.889ZM16.757,44.195c5.621,0,8.535-3.216,8.535-8.842V27.515c0-5.175-2.133-8.038-6.349-8.038a5.511,5.511,0,0,0-5,2.562l.469-8.39h9.94V8.625H9.264l-1.041,20.4h5.412V27.967c0-2.512,1.145-3.466,2.966-3.466s2.967.954,2.967,3.466V35.7c0,2.512-1.145,3.417-2.967,3.417s-2.966-.9-2.966-3.417V32.439H8.223v2.914c0,5.626,2.914,8.842,8.534,8.842m19.515,0c5.621,0,8.535-3.216,8.535-8.842V32.589c0-3.567-1.145-6.179-4.007-7.385,2.758-1.1,4.007-3.467,4.007-7.235v-.9c0-5.627-2.914-8.842-8.535-8.842s-8.534,3.215-8.534,8.842v1.909H33.15V16.713c0-2.512,1.145-3.466,2.966-3.466s2.966.854,2.966,4.019v1.959c0,2.814-1.3,3.718-3.434,3.718H33.41v5.024h1.925c2.6,0,3.747,1.206,3.747,4.472V35.2c0,3.115-1.145,3.969-2.966,3.969S33.15,38.216,33.15,35.7V32.439H27.738v2.914c0,5.626,2.914,8.842,8.534,8.842m20.92-.4h5.725v-6.38h2.861V32.389H62.917V8.625H56.672L46.263,32.389v5.024H57.192Zm-5.672-11.4,5.672-13.013V32.389Zm1.028,15.917A13.155,13.155,0,1,0,65.7,61.462,13.156,13.156,0,0,0,52.548,48.306m-31.1,0A13.155,13.155,0,1,0,34.609,61.462,13.156,13.156,0,0,0,21.453,48.306"
                  fill={"#06C8BE"}
                />
              </svg>
          {/* <img src={Logo} alt="Logo" className="h-12" />  */}
        </div>

        <h2 className="text-[0.8rem] font-semibold  text-center text-[#06C8BE] mb-10">ENTERTAINMENT</h2>

        {error && <div className="mb-4 text-red-500 text-sm text-center">{error}</div>}

        <div className="mb-5">
          <label className="block text-sm text-left font-medium text-[#06C8BE]">Email</label>
          <input
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-400 focus:ring-[#06C8BE] focus:border-[#06C8BE] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-left font-medium text-[#06C8BE]">Contraseña</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white placeholder-gray-400 focus:ring-[#06C8BE] focus:border-[#06C8BE] outline-none pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2/4 right-3 transform -translate-y-1/2 text-[#06C8BE] hover:text-[#04d3c5] focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#06C8BE] text-white font-semibold py-2 rounded-lg hover:bg-[#04d3c5] transition duration-200 cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
