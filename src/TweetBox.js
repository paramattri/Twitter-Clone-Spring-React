import { Avatar, Button } from '@material-ui/core'
import axios from 'axios'
import React, {useState} from 'react'
import './TweetBox.css'
import { useHistory } from "react-router";

function TweetBox(props) {

    const {setOpenPopup} = props
    const [displayName, setDisplayName] = useState('Param Attri')
    const [userName, setUserName] = useState('Pattri')
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    //const [avatar, setAvatar] = useState('https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png')

    // const history = useHistory();

    const sendTweet = e => {
        e.preventDefault();
        //Send data to database-----Implement   
        console.log({displayName : displayName, userName : userName, tweetBody : tweetMessage, tweetImage : tweetImage, verified : true})
        axios.post("http://localhost:8080/twitter/tweet", {displayName : displayName, userName : userName, tweetBody : tweetMessage, tweetImage : tweetImage, verified : true})
        .then((response) => {
            console.log("Tweet Posted Successfully!!")
            window.location.reload()
            // history.push("/")
        })
        setOpenPopup(false)
        setTweetMessage("");
        setTweetImage("");  
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
