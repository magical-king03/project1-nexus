import './App.css';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import bgmobile from "./img/bg-mob.png"
import background from "./img/bg.png";
import Nav from './pages/Nav';

function App() {
  return (
    <div className='bg-[#ffe7d2] w-screen h-screen'>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain', // Center the background image
        minHeight: '100vh', // Ensure the container takes up at least the height of the viewport
      }} className='h-screen hidden md:block lg:bg-center md:bg-top w-screen h-screen'>
        <Nav />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <div style={{
        backgroundImage: `url(${bgmobile})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        // minHeight: '100px',
      }} className='h-screen w-full block md:hidden bg-center'>
        <Nav />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
