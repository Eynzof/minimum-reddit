import React from 'react';
import Category from "./Category";


const Categories = (props) => {
    const subreddits = props.subreddit;
    console.log('component categoreis received: ', subreddits)
    return (
        <div>
            {subreddits ? subreddits.map(subreddit => <Category subreddit={subreddit.data}/>) : null}
        </div>
    );
}

Categories.propTypes = {};

export default Categories;