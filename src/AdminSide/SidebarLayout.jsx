import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common_Components/Sidebar';

 const  SidebarLayout = () => {
    return (
        <>
            <div className=""  >
                <Sidebar/>
                <div >
                    <div className="middle-sec">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
 
export default  SidebarLayout;

