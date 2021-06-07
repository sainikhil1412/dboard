import React from 'react';
import {Home , 
        BarChart,
        PieChart,
        ShowChart,
        Assessment,
        Help
} 
from '@material-ui/icons';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  },
  {
    title: 'Chart-1',
    path: '/chart-1',
    icon: <BarChart/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  },
  {
    title: 'Chart-2',
    path: '/chart-2',
    icon: <PieChart/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  },
  {
    title: 'Chart-3',
    path: '/chart-3',
    icon: <ShowChart/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <Assessment/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <Help/>,
    cName: 'sidebarListItem',
    iconClassName : 'sidebarIcon',
  }
];