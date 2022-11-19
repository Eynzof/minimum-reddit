import React from 'react';
import Subreddit from "./Subreddit";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectCurrentSubredditName, selectStatus, selectSubreddits} from "./SubredditSlice";
import {SubredditSkeleton} from "./SubredditSkeleton";

const Subreddits = ({_, handleClick}) => {
    const subreddits = useSelector(selectSubreddits)
    const status = useSelector(selectStatus);
    const currentSubredditName = useSelector(selectCurrentSubredditName);

    if (status === 'succeeded' && subreddits.length > 0) {
        return (
            <div>
                {subreddits.map(subreddit => {
                    if (subreddit.data.display_name === currentSubredditName) {
                        return <Subreddit key={subreddit.data.display_name} subreddit={subreddit.data}
                                          handleClick={() => {
                                          }} selected={true}/>
                    }
                    return <Subreddit key={subreddit.data.display_name} subreddit={subreddit.data}
                                      handleClick={handleClick} selected={false}/>
                })}
            </div>
        );
    }
    return (
        <div>
            {Array(25).fill(<SubredditSkeleton/>)}
        </div>
    );
}

Subreddits.propTypes = {
    handleClick: PropTypes.func
};

export default Subreddits;