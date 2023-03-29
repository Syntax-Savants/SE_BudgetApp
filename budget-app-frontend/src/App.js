import './App.css';
import DefaultPage from './pages/DefaultPage';
import CalendarPage from './pages/CalendarPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import LoanPage from './pages/LoanPage';
import BalancePage from './pages/BalancePage';
import SignupPage from './pages/SignUpPage';

import User from './class/User';
import { setCurrentUser } from './Global';
import HelpPage from './pages/HelpPage';
function App() {
  useEffect(() => {

  }, []);
  return (

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<CalendarPage />} />
      <Route path="loan" element={<LoanPage />} />
      <Route path="balance" element={<BalancePage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="/loan/help" element={<HelpPage />} />

    </Routes>);
}

export default App;
