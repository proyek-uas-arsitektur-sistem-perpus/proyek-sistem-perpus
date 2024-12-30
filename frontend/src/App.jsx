import React from 'react';
import Dashboard from './pages/Dashboard';
import SidebarStaff from './components/SidebarStaff';
import './App.css'; // Tambahkan CSS global jika diperlukan


const App = () => {
  return (
    <div className="app">
      <Dashboard />
      <SidebarStaff/>
    </div>
  );
};

export default App;
