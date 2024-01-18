import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import LogementDetail from './components/LogementDetail';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<LogementDetail />}/>
          <Route path="*" element={<Error />} />
      </Routes>
    <Footer />
    </Router>
  )
  
}

export default App;
