import React from 'react'


const Card = (props) => {
    const post = props.post;
    console.log("Card received post: ", post);
    return (
        <div className="card">
            <div className="post-vote-container"></div>
            <div className="post-container">
                <h3 className="post-title">{props.post.data.title}</h3>
                <div className="post-image-container"></div>
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