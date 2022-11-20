import React from "react";


const Comments = () => {
    return (<div className="post-comments mt-2">
        <div className="post-comment">
            <div className="comment-meta flex flex-row justify-between">
                {/*<img>*/}
                <p className="comment-author">SportsGirl</p>
                <p className="comment-time">3 hours ago</p>
            </div>
            <div>
                <p className="comment">Will do. I will not watch the World Cup in protest against Qatar. I wasn’t going to watch it anyways but now I have a reason for it.</p>
            </div>
        </div>
    </div>)
}

export default Comments