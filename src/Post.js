import React, { Component } from 'react';
import PostItem from "./PostItem";
import "./Post.css";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MmsIcon from '@material-ui/icons/Mms';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


export default function Post(props){
    
    const {ups,description,thumbnail,title,author_fullname,subreddit,num_comments,static_icon_url} = props.post
    const[count,setCount] = React.useState(0);

    return(
        <post className="posts" >
         
                <div className="post ">
                    <div className="post_left">
                        <ArrowDropUpIcon className="arrowup" onClick={()=>setCount(count + 1)}/>
                        <span>{ups+count}</span>
                        <ArrowDropDownIcon className="arrowdown" onClick={()=>setCount(count-1)}  />
                    </div>
                    <div className="post_center">
                        <img src = {thumbnail} alt="Ioading.."/>

                        
                    </div>
                    <div className="post_right">
                        <h3><a href={`/r/${subreddit}/${title}`} onClick={<PostItem subreddit={subreddit}/>}>{title}</a></h3>
                        <h5>{description}</h5>
                        <span className="post_info">
                            submitted by 
                            {" "}{author_fullname}{" "}
                            to
                            {" "}<a href={`/r/${subreddit}`}>{subreddit}</a>
                        </span>
                        <p className="post_info">
                            {num_comments} <MmsIcon/> | Share | Hide | Report
                        </p>
                    </div>
        </div>
        </post>

    )
}