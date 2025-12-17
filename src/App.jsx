import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Allproject from './components/Allproject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Allproject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
