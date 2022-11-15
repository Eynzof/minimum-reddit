import React from 'react'

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

const Card = (props) => {
    const post = props.post.data;
    console.log("Card received post: ", post);
    const url = post['url'];
    const valid_url = checkURL(url)? url : null;

    return (
        <div className="card">
            <div className="post-vote-container"></div>
            <div className="post-container">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-image-container">
                    {valid_url?<img alt="post" src={valid_url} style={{maxHeight: "512px"}}/> : null}
                </div>
                <div className="post-details">
                    <span className="post-author"></span>
                    <span className="post-date"></span>
                    <div className="post-comments-container"></div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {}

export default Card