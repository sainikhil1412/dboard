import React from 'react';
import "./sidebar.css"
import {Home , Timeline , TrendingUp , PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,} from '@material-ui/icons';
import {SidebarData} from './SidebarData.js';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    
                    <ul className="sidebarList" >
                        {/* <li className="sidebarListItem">
                            <Home className="sidebarIcon" />Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />Sales
                        </li> */}

                        {SidebarData.map((item, index) => {
                           return (
                            <li key={index} className={item.cName}>
                               <Link to={item.path} style={{ textDecoration: 'none' }} >
                                    <span className={item.iconClassName}>{item.icon}</span>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                        })}


                    </ul>
                </div>

               
                
             
                
            </div>
            

            
            
        </div>


    );
}

export default Sidebar;