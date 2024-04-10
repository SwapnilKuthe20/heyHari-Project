import React from 'react';
import { NavLink } from 'react-router-dom';
import {myProfileLogo,walletLogo,segmentLogo,languageLogo,certificateLogo,inviteBuyerLogo,myPostLogo,savedDrafts,faqLogo,deactivateAccLogo,deleteAccLogo,logoutLogo} from '../../Assets/Icons/ProfileLogo';

function Profile() {
  const profileItems = [
    { id: 1, path: '/myprofile', profileData: null, label: "My Profile", img: myProfileLogo },
    { id: 2, path: '/mywallet', color: "green", profileData: '₹10143.00', label: "My Wallet", img: walletLogo },
    { id: 3, path: '/myseg', profileData: null, label: "My Segments & Categories", img: segmentLogo },
    { id: 4, path: '/mypreferredlanguage', profileData: null, label: "My Preferred Language", img: languageLogo },
    { id: 5, path: '/managecertifications', profileData: null, label: "Manage Certificates", img: certificateLogo },
    { id: 6, path: '/invitebuyers', profileData: null, label: "Invite Buyers and Set Credit Limit", img: inviteBuyerLogo },
    { id: 7, path: '/mypost', profileData: "123", label: "My Posts", img: myPostLogo },
    { id: 8, path: '/saveddrafts', profileData: "2", label: "Saved Drafts", img: savedDrafts },
    { id: 9, path: '/faqs', profileData: null, label: "FAQ’s", img: faqLogo },
    { id: 10, path: '/deactivateaccount', profileData: null, label: "Deactivate Account", img: deactivateAccLogo },
    { id: 11, path: '/deleteaccount', profileData: null, label: "Delete Account", img: deleteAccLogo },
    { id: 12, path: '/logout', profileData: null, label: "Logout", img: logoutLogo }
  ];
  
  return (
    <ul className='ps-10 pt-10 pe-6 border-r border-[#D9D9D9]'>
      {
        profileItems?.map((items) => {
          const { id, path, profileData, label, img, color } = items
          return (

            <li key={id} className='md:w-[350px] w-[450px]'>
              <NavLink to={path} className="flex gap-2 mb-4">
                <img src={img} alt={label} />
                <div className='flex flex-grow justify-between text-base font-poppins font-light'>
                  <span>{label}</span>
                  <span className={color ? 'text-[#19B500] text-base font-poppins font-medium' : ''}>
                    {profileData}
                  </span>
                </div>
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Profile;
