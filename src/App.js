import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import LogIn from './components/Auth/LogIn';
import Registration from './components/Auth/Registration';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';
import NotFound from './components/Shared/NotFound';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
