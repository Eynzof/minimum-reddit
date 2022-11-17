import React, {useState} from 'react';
import Category from "./Category";



const Categories = (props) => {

    const [currentSubreddit, setCurrentSubreddit] = useState();

    const handleClick =(e) => {
        setCurrentSubreddit(e.target.value);
    }

    const subreddits = props.subreddit;

    return (
        <div>
            {subreddits ? subreddits.map(subreddit => {
                if(subreddit.data.display_name === currentSubreddit) {
                    return <Category subreddit={subreddit.data} handleClick={()=>{}} selected={true}/>
                }
                return <Category subreddit={subreddit.data} handleClick={handleClick} selected={false}/>
            }) : null}
        </div>
    );
}

Categories.propTypes = {};

export default Categories;