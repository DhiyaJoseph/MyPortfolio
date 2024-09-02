import './App.css';
import Navbar from './components/Navbar'
import Myself from './components/Myself'
import About from './components/About'
import Interests from './components/Interests'
import Projects from './components/Projects'
function App() {
  return (
    <div >
      <Navbar />
      <Myself/>
      <About />
      <Interests />
      <Projects/>
      
    </div>
  );
}

export default App;

