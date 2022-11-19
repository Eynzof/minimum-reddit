import React from 'react';
import Subreddit from "./Subreddit";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectStatus, selectSubreddits} from "./SubredditSlice";
import {SubredditSkeleton} from "./SubredditSkeleton";

const Subreddits = ({_, handleClick, currentSubreddit}) => {
    const subreddits = useSelector(selectSubreddits)
    const status = useSelector(selectStatus);



    if (status === 'succeeded' && subreddits.length > 0) {
        return (
            <div>
                {subreddits.map(subreddit => {
                    if (subreddit.data.display_name === currentSubreddit) {
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
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
            <SubredditSkeleton/>
        </div>
    );
}

Subreddits.propTypes = {
    subreddits: PropTypes.array,
    handleClick: PropTypes.func
};

export default Subreddits;