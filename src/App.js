import Sidebar from "./Common_Components/Sidebar";
import { Home, Dashboard, Invetory, Create, Search, Profile, Notification, CustomerCare } from './Components/Links';
import { homeIcon, dashboardIcon, inventoryIcon, createIcon, searchIcon, profileIcon, notificationIcon } from './Assets/Icons';
import { customerCareImage } from './Assets/Images';
import { Routes, Route } from 'react-router-dom';
import ShowListOfComponent from "./ShowListOfComponent/ShowListOfComponent";

function App() {
  const NavLinks = [
    { path: "/", component: Home, element: "Home", icon: homeIcon },
    { path: "/dashboard", component: Dashboard, element: "Dashboard", icon: dashboardIcon },
    { path: "/invetory", component: Invetory, element: "Invetory", icon: inventoryIcon },
    { path: "/create", component: Create, element: "Create", icon: createIcon },
    { path: "/search", component: Search, element: "Search", icon: searchIcon },
    { path: "/profile", component: Profile, element: "Profile", icon: profileIcon },
    { path: "/notification", component: Notification, element: "Notification", icon: notificationIcon },
    { path: "/customerCare", component: CustomerCare, element: "CustomerCare", icon: customerCareImage },
  ]

  return (
    <>
      <div className="flex justify-between">
        <Sidebar NavLinks={NavLinks} />
        <Routes>
          {
            NavLinks?.map((links, index) => {
              return (
                <Route key={index} exact path={links?.path} element={<links.component />} className="" />
              )
            })
          }
        </Routes>
        <ShowListOfComponent />
      </div>
    </>
  );
}

export default App;
