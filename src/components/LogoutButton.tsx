import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/authHelpers';
import { FiLogOut } from 'react-icons/fi'; // Icono moderno de logout

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors duration-200 text-sm ml-auto mb-4"
    >
      <FiLogOut className="text-lg" />
      <span>Cerrar sesión</span>
    </button>
  );
};

export default LogoutButton;
