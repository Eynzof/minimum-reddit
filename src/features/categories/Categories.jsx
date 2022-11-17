import React from 'react';
import Category from "./Category";
import PropTypes from 'prop-types';


const Categories = ({ subreddits, handleClick, currentSubreddit }) => {

    return (
        <div>
            {subreddits ? subreddits.map(subreddit => {
                if(subreddit.data.display_name === currentSubreddit) {
                    return <Category key={subreddit.data.display_name} subreddit={subreddit.data} handleClick={()=>{}} selected={true}/>
                }
                return <Category key={subreddit.data.display_name} subreddit={subreddit.data} handleClick={handleClick} selected={false}/>
            }) : null}
        </div>
    );
}

Categories.propTypes = {
    subreddits: PropTypes.array,
    handleClick: PropTypes.func
};

export default Categories;