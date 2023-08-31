import React from 'react'
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    BulbOutlined,
    FundOutlined,
  } from "@ant-design/icons";

const Sidebar = ({setActiveMenu, activeMenu}) => {
  return (
    <div className='sidebar'>
        <div className="cancel-menu" onClick={() => setActiveMenu(!activeMenu)}>
            <h3>X</h3>
        </div>
        <hr />
      <ul>
        <li> <HomeOutlined /> <Link to="/">Home</Link></li>
        <li> <FundOutlined/> <Link to="/cryptocurrencies">Cryptocurrencies</Link></li>
        <li> <BulbOutlined/> <Link to="/news">News</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar