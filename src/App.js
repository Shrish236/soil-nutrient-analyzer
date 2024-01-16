import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
