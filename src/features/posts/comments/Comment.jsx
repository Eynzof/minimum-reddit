import React from "react";

const Comment = ({comment}) => {
    console.log(comment)

    const c = comment.data;

    return (<div className="post-comment">
        <div className="comment-meta flex flex-row justify-between">
            {/*<img>*/}
            <p className="comment-author">{c.author}</p>
            <p className="comment-time">3 hours ago</p>
        </div>
        <div>
            <p className="comment">{c.body}</p>
        </div>
    </div>)
}

export default Comment;