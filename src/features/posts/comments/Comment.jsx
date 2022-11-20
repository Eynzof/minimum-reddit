import React from "react";
import parse from "html-react-parser";

const Comment = ({comment}) => {
    console.log(comment)

    const parse = require('html-react-parser')

    const c = comment.data;
    const body = parse(parse(c.body_html))

    return (<div className="post-comment card" style={{padding: "1rem", marginBottom: '1rem'}}>
        <div className="comment-meta flex flex-row justify-between">
            {/*<img>*/}
            <p className="comment-author">{c.author}</p>
            <p className="comment-time">{c.created}</p>
        </div>
        <div>
            <p className="comment" style={{ wordWrap: 'break-word'}}  >{body}</p>
        </div>
    </div>)
}

export default Comment;