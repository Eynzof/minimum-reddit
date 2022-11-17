import React from 'react';


const Category = (props) => {
    return (
        <div><span>{props.subreddit.display_name}</span></div>
    );
}

Category.propTypes = {};

export default Category;