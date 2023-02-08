import './App.css';
import DefaultPage from './pages/DefaultPage';
import CalendarPage from './pages/CalendarPage';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
function App() {
  return (

    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<CalendarPage />} />
    </Routes>);
}

export default App;
