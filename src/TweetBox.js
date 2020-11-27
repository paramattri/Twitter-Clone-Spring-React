import { Avatar, Button } from '@material-ui/core'
import React, {useState} from 'react'
import './TweetBox.css'

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        //Send data to database-----Implement
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"/>
                <input value={tweetMessage} placeholder="What's happening?" type="text" onChange={e => setTweetMessage(e.target.value)}/>
                </div>
                <input value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" onChange={e => setTweetImage(e.target.value)}/>
                <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>Tweet</Button>
            </form>   
        </div>
    )
}

export default TweetBox
