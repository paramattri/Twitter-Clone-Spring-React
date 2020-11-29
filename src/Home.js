import React from 'react'
import './Home.css'
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default Home
