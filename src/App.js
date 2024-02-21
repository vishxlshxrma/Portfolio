import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<><Layout /><Home /></>} />
    </Routes>
    </>
  );
}

export default App;
