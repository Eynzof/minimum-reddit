import React from "react";
import Comment from "./Comment";


const Comments = ({comments}) => {
    // console.log(comments)

    const c = comments[0].data.slice(0,10);
    return (<div className="post-comments mt-2">
        {c.map(comment => <Comment key={comment.data.id} comment={comment}/>)}
    </div>)
}

export default Comments