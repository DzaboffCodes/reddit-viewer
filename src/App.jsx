import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <FilterBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* More routes can go here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

