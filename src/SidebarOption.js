import React from 'react'
import './SidebarOption.css'

function SidebarOption({ active, text, Icon, handleLogout}) {

    return (
        <div className={`sidebarOption ${active && `sidebarOption--active`}`} onClick={handleLogout}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption
