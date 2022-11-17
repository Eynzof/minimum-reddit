import React from 'react';


const Category = (props) => {
    console.log('component category received: ', props.subreddit)
    return (
        <div className={props.selected ? "selected-subreddit subreddit-card" : "subreddit-card"}>
            <button type="button" onClick={props.handleClick}
                    value={props.subreddit.display_name}>{props.subreddit.display_name}</button>
        </div>
    );
}

Category.propTypes = {};

export default Category;