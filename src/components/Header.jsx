import { FaReddit } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <-- Add this import
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-title">
        <Link to="/"> {/* Make the icon clickable */}
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
