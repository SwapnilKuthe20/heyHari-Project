import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Common_Components/Sidebar';
import { Profile } from '../Components/Links';

const Dashboards = () => {
    return (
        <>
            <div className='flex' >
                <Sidebar />
                <div >
                    <div className="middle-sec" style={{ display: "flex" }}>
                        {/* <Profile /> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboards;


