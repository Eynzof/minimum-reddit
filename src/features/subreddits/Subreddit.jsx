import React from 'react';
import PropTypes from 'prop-types';
import {selectCurrentSubredditName, updateCurrent} from "./SubredditSlice";
import {fetchPost} from "../posts/PostSlice";
import {useDispatch, useSelector} from "react-redux";

const Subreddit = ({subreddit}) => {

    const dispatch = useDispatch();
    const selected = useSelector(selectCurrentSubredditName) === subreddit.display_name;

    const handleClick = (e, url) => {
        dispatch(updateCurrent(e.currentTarget.value));
        dispatch(fetchPost(url + ".json"));
    }

    const url = subreddit.url;
    const logo_url = subreddit['icon_img'] ? subreddit['icon_img'] : "https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_rvt3zjh1fc551.png";

    return (
        <div className={selected ? "selected-subreddit subreddit-card" : "subreddit-card"}>
            <button type="button" onClick={event => handleClick(event, url)}
                    value={subreddit.display_name}>
                <img alt="Subreddit Icon" role="presentation" className="subreddit-logo"
                     src={logo_url}/>
                <span>{subreddit.display_name}</span>
            </button>
        </div>
    );
}

Subreddit.propTypes = {
    subreddit: PropTypes.object,
    handleClick: PropTypes.func,
    selected: PropTypes.bool
};

export default Subreddit;