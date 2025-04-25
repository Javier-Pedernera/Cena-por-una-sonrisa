import React from 'react';
import Home from './pages/Home';
import './App.css'
import DinnerForm from './pages/DinnerForm';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminData from './pages/admin/AdminData';
import Login from './pages/Login';
import { isAdmin, isAuthenticated } from './utils/authHelpers';

const App: React.FC = () => {
  const isUserAuthenticated = isAuthenticated();
  const isUserAdmin = isAdmin();
    // console.log("esta autenticado?",isUserAuthenticated,"es admin?", isUserAdmin);

  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/cpus" element={<DinnerForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/data" element={
          <ProtectedRoute isAuthenticated={isUserAuthenticated} isAdmin={isUserAdmin}>
            <AdminData />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;