import React from 'react';
import Subreddit from "./Subreddit";
import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {selectStatus, selectSubreddits} from "./SubredditSlice";
import {SubredditSkeleton} from "./SubredditSkeleton";

const Subreddits = () => {
    const subreddits = useSelector(selectSubreddits)
    const status = useSelector(selectStatus);

    if (status === 'succeeded' && subreddits.length > 0) {
        return (
            <div>
                {subreddits.map(subreddit => <Subreddit key={subreddit.data.display_name} subreddit={subreddit.data}/>)}
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
    handleClick: PropTypes.func
};

export default Subreddits;