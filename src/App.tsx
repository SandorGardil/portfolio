import { Header } from './components/header.tsx';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home.tsx';
import  About  from './pages/About.tsx';
import  Resume  from './pages/Resume.tsx';


function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App
