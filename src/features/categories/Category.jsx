import React from 'react';
import PropTypes from 'prop-types';

const Category = ({subreddit, handleClick, selected}) => {
    // console.log('component category received: ', subreddit)
    const url = subreddit.url;
    // console.log(url)
    const logo_url = subreddit['icon_img'] ? subreddit['icon_img'] : "https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_rvt3zjh1fc551.png";
    // console.log(logo_url)
    // const img_url = subreddit['header_img'];
    // console.log(img_url);
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

Category.propTypes = {
    subreddit: PropTypes.object,
    handleClick: PropTypes.func,
    selected: PropTypes.bool
};

export default Category;