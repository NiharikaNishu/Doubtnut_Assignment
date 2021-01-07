import React, { Component } from 'react';
import './Main.css';
import Post from "./Post";


export default function Main(props){

    const [subreddits, setSubreddit] = React.useState('');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        fetch("https://www.reddit.com/r/cats.json").then(res => {
            if(res.status != 200) {
                console.log("err");
                return;
            }

            res.json().then(data => {
                if(data != null){
                    setPosts(data.data.children);
                }
            });
        })
    }, [subreddits]);


    return(
        <div className="main">
         {
         (posts != null)? posts.map((post,index)=> <Post key = {index} post={post.data}/>) :''
         }

        </div>
    )
}