import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Param Attri {" "}
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge"/>
                            @Pattri
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I am building Twitter Clone.. Let's Go!!!!</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/l0ExcNsINszxpw6E8/giphy.gif" alt=""/>
                <div className="post__footer">
                    <ChatBubbleIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
