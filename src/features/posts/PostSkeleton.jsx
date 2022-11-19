import React from 'react'
import {Button, Skeleton} from "antd";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const PostSkeleton = () => {
    return (
        <div className="post-card flex flex-row">
            <div className="post-vote-container flex flex-col items-center">
                <Button type="ghost" icon={<UpOutlined/>} size='small' className="flex justify-center items-center" style={{border: "none"}}/>
                <span className="post-score">0</span>
                <Button type="ghost" icon={<DownOutlined/>} size='small'
                        className="flex justify-center items-center" style={{border: "none"}}/>
            </div>
            <div className="post-container">
                <h3 className="post-title"><Skeleton active/></h3>
                <div className="post-image-container">
                    <Skeleton active/>
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

export default PostSkeleton