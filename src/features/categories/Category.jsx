import React from 'react';
import PropTypes from 'prop-types';

const Category = ({subreddit, handleClick, selected}) => {
    // console.log('component category received: ', subreddit)
    // const url = subreddit.url;
    return (
        <div className={selected ? "selected-subreddit subreddit-card" : "subreddit-card"}>
            <button type="button" onClick={handleClick}
                    value={subreddit.display_name}>{subreddit.display_name}</button>
        </div>
    );
}

Category.propTypes = {
    subreddit: PropTypes.object,
    handleClick: PropTypes.func,
    selected: PropTypes.bool
};

export default Category;