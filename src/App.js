import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
