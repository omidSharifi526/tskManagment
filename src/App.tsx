
import './App.css';
import Greet from './components/Greet';
import LoginPage from './components/Login/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </Router>
  );
}

export default App;
