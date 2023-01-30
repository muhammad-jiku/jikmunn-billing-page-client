import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Registration from './components/Auth/Registration';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound';
import LogInPage from './pages/AuthPages/LogInPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
