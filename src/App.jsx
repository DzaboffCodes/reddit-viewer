import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-layout">
        <FilterBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:subreddit/:postId" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

