import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postSlice';

const FilterBar = () => {
    const [activeFilter, setActiveFilter] = useState(null); 
    const dispatch = useDispatch();

    const filters = [
        {label: "Tech", subreddit: "Technology"},
        {label: "Games", subreddit: "Gaming"},
        {label: "News", subreddit: "News"},
    ];

    const handleFilterClick = (subreddit) => {
        setActiveFilter(subreddit);
        dispatch(fetchPosts(subreddit));
    };

    const handleHomeClick = () => {
        setActiveFilter(null);
        dispatch(fetchPosts());
    }

    return (
        <div className="filter-bar"> 
            <h3>Categories</h3>
            <button onClick={handleHomeClick} className={!activeFilter ? 'active' : ''}>
                Home
            </button>
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