import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Shared/Navbar';
import NotFoundPage from './pages/404/NotFoundPage';
import LogInPage from './pages/AuthPages/LogInPage';
import RegistrationPage from './pages/AuthPages/RegistrationPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
