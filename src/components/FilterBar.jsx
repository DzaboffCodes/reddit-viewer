import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setFilter } from '../features/posts/postSlice';
import { useNavigate } from 'react-router-dom'; // <-- Add this import

const FilterBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // <-- Add this line
  const activeFilter = useSelector((state) => state.posts.filter);

  const filters = [
    {label: "Tech", subreddit: "Technology"},
    {label: "Games", subreddit: "Gaming"},
    {label: "News", subreddit: "News"},
  ];

  const handleFilterClick = (subreddit) => {
    dispatch(setFilter(subreddit));
    dispatch(fetchPosts(subreddit));
    navigate('/'); // <-- Ensure you are on the home page
  };

  const handleHomeClick = () => {
    dispatch(setFilter(null));
    dispatch(fetchPosts());
    navigate('/'); // <-- Ensure you are on the home page
  };

  return (
    <div className="filter-bar">
      <button onClick={handleHomeClick} className={!activeFilter ? 'active' : ''}>Home</button>
      <h3>Categories</h3>
      {filters.map((filter) => (
        <button
          key={filter.subreddit}
          onClick={() => handleFilterClick(filter.subreddit)}
          className={filter.subreddit === activeFilter ? 'active' : ''}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;