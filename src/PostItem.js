import React, { Component } from 'react';
import "./PostItem.css";

export default function PostItem(props) {
    console.log(props.subreddit+"Test");
    const {ups,thumbnail,title,author_fullname,subreddit,num_comments} = props.post
    return(
        <div className="post">
            <div className="post_left">
                <i className="fas fa-caret-up"></i>
                <span>{ups}</span>
                <i className="fas fa-caret-down"></i>
            </div>
            <div className="post_center">
                <img src = {thumbnail} alt = "image loading..." />
            </div>
            <div className="post_right">
                <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
                <span className="post_info">
                    submitted an hour ago by 
                    {" "}<a href={`/u/${author_fullname}`}>{author_fullname}</a>{" "}
                    to
                    {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
                </span>
                {/* <p className="post_info">
                    {num_comment} comments | share | hide | report
                </p> */}
            </div>
        </div>
    )
}