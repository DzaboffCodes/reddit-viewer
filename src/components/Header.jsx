import {FaReddit} from 'react-icons/fa';
import SearchBar from "src/components/SearchBar.jsx"

const Header = () => {
    return (
        <div className='header'> 
            <Fareddit size={32} color="#FF4500" />
            <h1> Reddit Viewer</h1>

            <SearchBar />

            <button>Log In</button>
        </div>
    )
}

export default Header;