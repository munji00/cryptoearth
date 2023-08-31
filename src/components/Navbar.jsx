import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import './navbar.css'
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import icon from '../images/cryptocurrency.png';
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  // const [screenSize, setScreenSize] = useState(undefined);

  //useEffect(() => {
  //const handleResize = () => setScreenSize(window.innerWidth);

  // window.addEventListener('resize', handleResize);

  // handleResize();

  // return () => window.removeEventListener('resize', handleResize);
  //}, []);

  // useEffect(() => {
  //if (screenSize <= 800) {
  //setActiveMenu(false);
  // } else {
  // setActiveMenu(true);
  //}
  //}, [screenSize]);

  return (
    <>
    <div className="nav-container">
      <div className="logo-container">
          <Link to="/">CryptoEarth</Link>
      </div>
      <div className="nav-items">
       <div className="single-menu">
         <HomeOutlined />
         <Link to="/">Home</Link>
       </div>
       <div className="single-menu">
         <FundOutlined/>
         <Link to="/cryptocurrencies">Cryptocurrencies</Link>
       </div>
       <div className="single-menu">
         <BulbOutlined/>
         <Link to="/news">News</Link>
       </div>
    </div>
    <div className="menu-button">
       <Button
             onClick={() => setActiveMenu(!activeMenu)}
         >
           <MenuOutlined />
       </Button> 
    </div>
  </div>
  {activeMenu && <Sidebar setActiveMenu ={setActiveMenu} activeMenu={activeMenu}/>}
  </>
  );
};

export default Navbar;
