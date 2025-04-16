import React from 'react';
import Home from './pages/Home';
import './App.css'
import DinnerForm from './pages/DinnerForm';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/cpus" element={<DinnerForm />} />
      </Routes>
    </div>
  );
};

export default App;