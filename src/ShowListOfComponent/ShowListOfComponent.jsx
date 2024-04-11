import React from 'react'
import RoundedButtonMain from "../Common_Components/RoundedButtonMain";
import CheckboxMain from "../Common_Components/CheckboxMain";
import ToggleButtonMain from "../Common_Components/ToggleButtonMain";
import CommonComponents from '../Common_Components/CommonComponents'
import Homepage from "../Components/Homepage"
import ProductTableMain from "./Common_Components/ProductTableMain";
import DashboardCard from './Common_Components/DashboardCard';
import Dropdown from './Common_Components/Dropdown';
// import Button from "./Common_Components/Button";
import DashboardCardMain from '../Common_Components/DashboardCardMain';
import TextAreaFieldMain from '../Common_Components/TextAreaFieldMain';

function ShowListOfComponent() {
    return (
        <div className='m-5'>
            <CheckboxMain />
            <ToggleButtonMain />
            <RoundedButtonMain />
            <ProductTableMain />
            <DashboardCard />
            <Dropdown />
            <CommonComponents />
            <Homepage />
            <DashboardCardMain />
            <TextAreaFieldMain />
        </div>
    )
}
export default ShowListOfComponent