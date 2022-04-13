import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Minerva Apps</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone fontSize='large' />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language fontSize='large' />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings fontSize='large' />
                    </div>
                    <img
                        src='https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg'
                        alt=''
                        className='topAvatar'
                    />
                </div>
            </div>
        </div>
    );
}
