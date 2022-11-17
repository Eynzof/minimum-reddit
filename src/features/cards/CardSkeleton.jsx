import React from 'react'
import {Button, Skeleton} from "antd";
import {DownOutlined, UpOutlined} from "@ant-design/icons";

const CardSkeleton = () => {
    return (
        <div className="flex flex-col">
            <div className="post-card flex flex-row">
                <div className="post-vote-container flex flex-col items-center">
                    <Button type="primary" icon={<UpOutlined/>} size='small' className="flex justify-center items-center"/>
                    <span className="post-score">
                        <Skeleton active />
                    </span>
                    <Button type="primary" icon={<DownOutlined/>} size='small'
                            className="flex justify-center items-center"/>
                </div>
                <div className="post-container">
                    <h3 className="post-title">
                        <Skeleton />
                    </h3>
                    <div className="post-image-container">
                        <Skeleton.Avatar active shape='circle' />
                    </div>
                    <div className="post-details">
                        <span className="post-author"></span>
                        <span className="post-date"></span>
                        <div className="post-comments-container"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton