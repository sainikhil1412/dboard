import React from 'react';
import "./topbar.css"
import {NotificationsNone , Language , Settings} from '@material-ui/icons';

function Topbar(props) {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img className="brand-pic" src="https://icons-for-free.com/iconfiles/png/512/dashboard-131979012867438271.png" alt="" />
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img className="topAvatar" src="https://thewanderers.travel/data_content/meet-the-wanderers/blank-user-img.jpg" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default Topbar;