import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@mui/icons-material";

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>Minerva Dashboard</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone fontSize='large' />
                        <span className='topIconBadge'>2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
