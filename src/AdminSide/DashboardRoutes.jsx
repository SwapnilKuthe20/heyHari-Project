import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboards from './Dashboards';
import { Create, CustomerCare, Dashboard, Home, Inventory, Notification, Profile, Search } from '../Components/Links';
import MyProfile from '../Components/MyProfile';
import MyWalletMain from '../Components/MyWalletMain';

const NavLinks = [
    { path: '/home', component: Home, title: 'Home' },
    { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
    { path: '/create', component: Create, title: 'Create' },
    { path: '/search', component: Search, title: 'Search' },
    { path: '/profile', component: Profile, title: 'Profile' },
    { path: '/inventory', component: Inventory, title: 'Inventory' },
    { path: '/notification', component: Notification, title: 'Notification' },
    { path: '/customerCare', component: CustomerCare, title: 'CustomerCare' },
    { path: '/profile/myprofile', component: MyProfile, title: 'MyProfile' },
    { path: '/profile/mywallet', component: MyWalletMain, title: 'MyWalletMain' },
]

function DashboardRoutes() {
    return (
        <>
            <Routes>
                {
                    NavLinks?.map((route) => (
                        <Route key={route.title} path={route.path} element={<Dashboards />} ><Route />
                            <Route index element={<route.component />} /></Route>
                    ))
                }
            </Routes>
        </>
    );
}

export default DashboardRoutes;