import React, {useState} from 'react'
import {CommentOutlined, DownOutlined, UpOutlined} from "@ant-design/icons";
import {Button} from "antd";
import Comments from "./comments/Comments";
import {useDispatch, useSelector} from "react-redux";
import {fetchComment, selectCommentsById, selectLoaded} from "./comments/CommentSlice";

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

export function m(n) {
    if (n < 0) {
        return '0';
    }
    if (n > 1000) {
        return Math.round(n / 1000) + 'k';
    }
    return n.toString();
}

const Post = ({post}) => {

    const dispatch = useDispatch();

    const id = post['id'];
    const imageurl = post['url'];
    const valid_url = checkURL(imageurl) ? imageurl : null;

    const [open, setOpen] = useState(false);

    // Comments
    const loaded = useSelector(selectLoaded);
    const comments = useSelector(selectCommentsById(id))

    const handleClick = () => {
        setOpen(!open);
        if (!open) {
            const url = post['permalink'];
            dispatch(fetchComment({url, id}))
        }
    }

    // const commentsInStore = useSelector(selectCommentsInStore(id));

    return (
        <div className="post-card flex flex-row">
            <div className="post-vote-container flex flex-col items-center">
                <Button type="ghost" icon={<UpOutlined/>} size='small' className="flex justify-center items-center"
                        style={{border: "none"}}/>
                <span className="post-score">{m(post.score)}</span>
                <Button type="ghost" icon={<DownOutlined/>} size='small'
                        className="flex justify-center items-center" style={{border: "none"}}/>
            </div>
            <div className="post-container">
                <div className="post-details">
                    <span className="post-author">Posted by {post.author}</span>
                    <span className="post-date"></span>
                    <div className="post-comments-container"></div>
                </div>
                <a className="post-title" href={post.url}>{post.title}</a>
                <div className="post-image-container">
                    {valid_url ? <img alt="post" src={valid_url} style={{maxHeight: "512px"}}/> : null}
                </div>
                <div>
                    <Button type="text" className="post-interaction items-center"
                            style={{display: 'flex', padding: '0'}} onClick={handleClick}>
                        <CommentOutlined style={{fontSize: "20px", marginRight: "4px"}}/>
                        <div className="post-interaction-comments">{post.num_comments} comments</div>
                    </Button>
                </div>
                {open ? (loaded ? <Comments comments={comments}/> : <p>loading</p>) : null}
            </div>
        </div>
    )
}

export default Post