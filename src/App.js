import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Shared/Navbar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <Routes location={location} key={location?.pathname}>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
