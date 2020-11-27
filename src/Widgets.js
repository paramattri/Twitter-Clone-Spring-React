import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'1332326814065197056'}/>

                <TwitterTimelineEmbed
                    sourceType = "profile"
                    screenName = "narendramodi"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={'https://www.facebook.com/param.attri.7/'}
                    options={{ text: '#reactjs is awesome', via: 'ParamAttri4' }}
                />

            </div>
        </div>
    )
}

export default Widgets
