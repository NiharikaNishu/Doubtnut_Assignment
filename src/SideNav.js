import React, { Component } from 'react';
import './SideNav.css';
import {useLocation} from "react-router-dom";

export default function SideNav(props) {

    const subreddits = props.subreddits;
 
    return (
        <div className="sideNav">
            <div className="sideNav_search">
                <input type="text" name="search"placeholder="search" />
                
            </div>
            <div className="sideNav_links">

                <ul className="subreddit">
                    {subreddits.map(subreddit => (
                        <li><a href = {`/r/${subreddit}`}>{subreddit}</a></li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}