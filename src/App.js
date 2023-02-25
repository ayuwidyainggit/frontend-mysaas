import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Contentjumbo from './components/Contentjumbo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Contentjumbo />
    </div>
  );
}

export default App;
