import React from "react";
import './Comment.css'
import parseTime from "../../../utils/parseTime";

const parse = require('html-react-parser')

const Comment = ({comment}) => {
    const c = comment.data;
    const body = parse(parse(c.body_html))


    return (<div className="post-comment card" style={{
        padding: "1rem",
        marginBottom: '1rem',
        boxShadow: 'none',
        border: '1px solid var(--color-border)'
    }}>
        <div className="comment-meta flex flex-row justify-between">
            {/*<img>*/}
            <p className="comment-author">{c.author}</p>
            <p className="comment-time">{parseTime(c.created)}</p>
        </div>
        <div className="comment" style={{wordWrap: 'break-word'}}>{body}</div>
    </div>)
}

export default Comment;