import './App.css';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}

export default App;
