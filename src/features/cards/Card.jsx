import React from 'react'
import {DownOutlined, UpOutlined} from "@ant-design/icons";
import {Button} from "antd";

function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function m(n, d) {
    let x = ('' + n).length;
    let p = Math.pow
    d = p(10, d);
    x -= x % 3
    return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
}

const Card = (props) => {
    const post = props.post.data;
    // console.log("Card received post: ", post);
    const url = post['url'];
    const valid_url = checkURL(url) ? url : null;

    return (
        <div className="post-card flex flex-row">
            <div className="post-vote-container flex flex-col items-center">
                <Button type="primary" icon={<UpOutlined/>} size='small' className="flex justify-center items-center"/>
                <span className="post-score">{m(post.score, 1)}</span>
                <Button type="primary" icon={<DownOutlined/>} size='small'
                        className="flex justify-center items-center"/>
            </div>
            <div className="post-container">
                <h3 className="post-title">{post.title}</h3>
                <div className="post-image-container">
                    {valid_url ? <img alt="post" src={valid_url} style={{maxHeight: "512px"}}/> : null}
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