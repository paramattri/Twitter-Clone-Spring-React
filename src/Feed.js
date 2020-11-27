import React from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import FlipMove from 'react-flip-move'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox/>

            <FlipMove>  
                <Post 
                displayName="Param Attri"
                username="Pattri"
                verified = {true}
                text="Twitter Clone Almost Complete"
                image="https://media.giphy.com/media/l0ExcNsINszxpw6E8/giphy.gif"
                avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                />
            </FlipMove>

        </div>
    )
}

export default Feed
