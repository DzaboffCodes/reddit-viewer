import { FaReddit } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-title">
        <FaReddit size={32} color="#FF4500" />
        <h1>Reddit Viewer</h1>
      </div>
      <SearchBar />
      <button>Log In</button>
    </div>
  );
};

export default Header;
