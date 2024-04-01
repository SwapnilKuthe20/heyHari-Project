import React, { useState } from 'react'
import Textfield from './Textfield'
import RoundedImage from './RoundedImage'
import Footer from './Footer'
import SquareButtons from './SquareButtons'
import Searchbar from './Searchbar'
import { Routes, Route } from 'react-router-dom'
import Ellipseimg1 from "./../assets/images/Ellipseimg1.png"


function CommonComponents() {
  const [input, setInput] = useState({
    name: " ",
  })
  const [search, setSearch] = useState(" ")

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:e.target.value
    })
    console.log(e.target.value);
  }

  const FooterLinks = [
    { path: "/", element: "Heyhari" },
    { path: "/about", element: "About" },
    { path: "/help", element: "help" },
    { path: "/privacy", element: "Privacy" },
    { path: "/terms", element: "terms" },
    { path: "/location", element: "Location", }
  ]

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    alert("Button clicked")
    setIsActive(!isActive);
  };

 
 const handleSearch=(e)=>{
  setSearch(e.target.value);
 }
 console.log(search);


  const dummydata = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Smith"
    },
    {
      id: 3,
      name: "Tom Brown"
    },
    {
      id: 4,
      name: "Harry Potter"
    }
  ]

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
      <Textfield name={"name"} placeholder={"phone"} type={"tel"} value={input.name} handleChange={handleChange} />
      <RoundedImage src={Ellipseimg1} alt={"rounded_image"} value={dummydata.length} className={"top-[135px] left-12 "} />
      <SquareButtons type="submit" onClick={handleClick} title="My Buyers" isActive={isActive} />
      <Searchbar placeholder="search" value={search} handleSearch={handleSearch} />

    </div>
  )
}

export default CommonComponents
