import React, { useState } from 'react'
import Textfield from './Textfield'
import RoundedImage from './RoundedImage'
import Footer from './Footer'
import SquareButtons from './SquareButtons'
import Searchbar from './Searchbar'
import { Routes, Route } from 'react-router-dom'
import Ellipseimg1 from "./../Assets/Images/Ellipseimg1.png"
import Ellipseimg2 from "./../Assets/Images/Ellipseimg2.png"
import Ellipseimg3 from "./../Assets/Images/Ellipseimg3.png"
import Ellipseimg4 from "./../Assets/Images/Ellipseimg4.png"
import Ellipseimg5 from "./../Assets/Images/Ellipseimg5.png"
import Ellipseimg6 from "./../Assets/Images/Ellipseimg6.png"
import Ellipseimg7 from "./../Assets/Images/Ellipseimg7.png"
import Ellipseimg8 from "./../Assets/Images/Ellipseimg8.png"
import Ellipseimg9 from "./../Assets/Images/Ellipseimg9.png"
import Ellipseimg10 from "./../Assets/Images/Ellipseimg10.png"
import LanguageCard from './LanguageCard'
import StarRating from './StarRating'
import Badge from './Badge'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";



function CommonComponents() {
  const [input, setInput] = useState({ name: " ", })
  const [search, setSearch] = useState(" ")
  const [Activecard, setActivecard] = useState(false)



  const handleCardclick = () => {
    setActivecard(!Activecard)
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);
  }

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    alert("Button clicked")
    setIsActive(!isActive);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  console.log(search);

  const FooterLinks = [
    { path: "/", element: "Heyhari" },
    { path: "/about", element: "About" },
    { path: "/help", element: "help" },
    { path: "/privacy", element: "Privacy" },
    { path: "/terms", element: "terms" },


    { path: "/location", element: "Location", }
  ]

  const imageUrls = [{ src: Ellipseimg1 },
    // { src: Ellipseimg2 }, { src: Ellipseimg3 }, { src: Ellipseimg4 }, { src: Ellipseimg5 },
    // { src: Ellipseimg6 }, { src: Ellipseimg7 }, { src: Ellipseimg8 }, { src: Ellipseimg9 }, { src: Ellipseimg10 }
  ]

  const dummydata = [
    {
      id: 1,
      invoice: 3
    },
    {
      id: 2,
      invoice: 4
    },
    {
      id: 3,
      invoice: 3
    },
    {
      id: 4,
      invoice: 4
    }
  ]
  const stars = 4.6

  const languagecardData = [
    { backgroundColor: "#E9ABFF", text: "English", languageicon: "En" },
    { backgroundColor: "#D0FFAB", text: "Hindi", subtext: "हिन्दी", languageicon: "हि" },
    { backgroundColor: "#9494FF", text: "Assamese", subtext: "অসমীয়া", languageicon: "অ" },
    { backgroundColor: "#FFEDAB", text: "Marathi", subtext: "मराठी", languageicon: "म" },
    { backgroundColor: "#ABFFBE", text: "Bengali", subtext: "বাংলা", languageicon: "বা" },
    { backgroundColor: "#ABEBFF", text: "Gujrati", subtext: "ગુજરાતી", languageicon: "ગ" },
    { backgroundColor: "#ADABFF", text: "Kanada", subtext: "ಕನ್ನಡ", languageicon: "ಕ" },
    { backgroundColor: "#D0ABFF", text: "Malayalam", subtext: "മലയാളം", languageicon: "മ" },
    { backgroundColor: "#FFABC9", text: "Tamil", subtext: "தமிழ்", languageicon: "த" },
    { backgroundColor: "#FFABAB", text: "Telugu", subtext: "తెలుగు", languageicon: "తె" },
  ]

  console.log(imageUrls);
  return (
    <div>
      <Footer footerlinks={FooterLinks} />
      <Routes>
        {FooterLinks?.map((item, index) => {
          return (
            <Route key={index} exact path={item.path} element={<item.element />} />
          )
        })}
      </Routes>

      <Textfield name={"name"} className placeholder={"phone"} type={"tel"} value={input.name} handleChange={handleChange} />
      <RoundedImage imageUrls={imageUrls} alt={"rounded_image"} />
      <Badge value={dummydata.length} className={"top-[135px] left-12 "} />
      <SquareButtons type="submit" onClick={handleClick} title="My Buyers" isActive={isActive} />
      <Searchbar placeholder="search" value={search} handleSearch={handleSearch} />
      <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} languagecardData={languagecardData} />
      <div className='flex'>
        {[...Array(5)].map((element, index) => {
          let number = index + 0.5;
          return (
            <span key={index} >
              {stars >= index + 1 ?
                <IoMdStar className='text-[#19B500]' /> : stars >= number ? <IoMdStarHalf className='text-[#19B500]' /> : <IoMdStarOutline />
              }
            </span>
          )
        })}
        <StarRating stars={stars} />
      </div>
    </div>
  )
}

export default CommonComponents
