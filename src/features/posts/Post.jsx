import React, {useState} from 'react'
import {CommentOutlined, DownOutlined, UpOutlined} from "@ant-design/icons";
import {Button, Modal} from "antd";

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

    // console.log("Post received post: ", post);
    const url = post['url'];
    const valid_url = checkURL(url) ? url : null;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

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

                <Button type="link" onClick={showModal} style={{padding: '0'}}>
                    <h3 className="post-title">{post.title}</h3>
                </Button>
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>content</Modal>
                <div className="post-image-container">
                    {valid_url ? <img alt="post" src={valid_url} style={{maxHeight: "512px"}}/> : null}
                </div>
                <div className="post-interaction flex items-center">
                    <CommentOutlined style={{fontSize: "20px", marginRight: "4px"}}/>
                    <div className="post-interaction-comments">{post.num_comments} comments</div>
                </div>
            </div>
        </div>
    )
}

export default Post