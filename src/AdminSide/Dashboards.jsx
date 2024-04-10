import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common_Components/Sidebar';

const Dashboards = () => {
    return (
        <>
            <div className='flex' >
                <Sidebar />
                <div >
                    <div className="middle-sec">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboards;


