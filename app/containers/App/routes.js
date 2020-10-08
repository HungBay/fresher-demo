import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Dashboard from 'containers/Dashboard';
import Layouts from 'containers/Layouts/Loadable';
import Report from 'containers/Report';
import ViewReport from 'containers/Report/ViewReport';
import React from 'react';
import Order from '../Customer/Order';

const routes = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    icon: <InboxIcon />,
    exact: false,
    role: 'admin',
    layout: Layouts,
    component: Dashboard,
    show: 1,
  },
  {
    path: '/customer',
    name: 'Customer',
    icon: <MailIcon />,
    exact: false,
    role: ['admin', 'member'],
    layout: Layouts,
    component: Order,
    show: 1,
  },
  {
    path: '/reports',
    name: 'Report',
    icon: <MailIcon />,
    exact: false,
    role: ['admin'],
    layout: Layouts,
    component: Report,
    show: 1,
  },
  {
    path: '/view/:id',
    name: 'Report',
    icon: <MailIcon />,
    exact: false,
    role: ['admin'],
    layout: Layouts,
    component: ViewReport,
    show: 0,
  },
];
export default routes;
