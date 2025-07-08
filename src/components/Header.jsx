import { FaReddit } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <-- Add this import
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="header">
      <div className="logo-title">
        <Link to="/" onClick={handleLogoClick}> 
          <FaReddit size={32} color="#FF4500" style={{ cursor: 'pointer' }} />
        </Link>
        <h1>Reddit Viewer</h1>
      </div>
      <SearchBar />
      <button>Log In</button>
    </div>
  );
};

export default Header;
