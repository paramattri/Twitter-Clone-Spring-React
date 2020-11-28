import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move'
import axios from 'axios'

function Feed() {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/twitter/tweets")
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setTweets(response.data)
        })
    }, [])

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox/>

            <FlipMove> 
                {tweets.map(tweet => (
                    <Post
                        key={tweet.tweetId}
                        displayName={tweet.displayName}
                        username={tweet.userName}
                        verified={tweet.verified}
                        text={tweet.tweetBody}
                        image={tweet.tweetImage}
                        avatar={tweet.avatar}
                    />
                ))} 
            </FlipMove>

        </div>
    )
}

export default Feed
