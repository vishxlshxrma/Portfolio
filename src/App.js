import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
    <Layout />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
    </>
  );
}

export default App;
