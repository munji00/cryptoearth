import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';
//import Loader from './Loader';
//import axios from 'axios';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  

  if(isFetching) return "Loading..."

  //useEffect(async() =>{
   // try {
    //  const temp = await axios.get(crypto_url, api_headers);
    //  console.log(`temp is:${temp}`);
    //} catch (error) {
   //   console.log("error occured");
   // }
 // },[]);
 
  return (
    <>
    
      <div className="main-heading">
        <h1>Global Cryptos Stats.</h1>
      </div>
      <div className="header">
        <div className='card'>
          <h3>Total Cryptocurrencies</h3>
          <h2>{globalStats?.total}</h2>
        </div>
        <div className='card'>
          <h3>Total Exchanges</h3>
          <h2>{millify(globalStats?.totalExchanges)}</h2>
        </div>
        <div className='card'>
          <h3>Total 24h Volume</h3>
          <h2>{globalStats?.total24hVolume}</h2>
        </div>
        <div className='card'>
          <h3>Total Market Caps</h3>
          <h2>{globalStats?.totalMarketCap}</h2>
        </div>
        <div className='card'>
          <h3>Total Markets</h3>
          <h2>{globalStats?.totalMarkets}</h2>
        </div>
      </div>
      <div className="home-heading-container">
        <h3>Top 10 Cryptos In The World</h3>
        <button className='btn'><Link to="/cryptocurrencies">Show more</Link></button>
      </div>
      <CryptoCurrencies simplified={true}/>
      <div className="home-heading-container">
        <h3>Latest Crypto News</h3>
        <button className='btn'><Link to="/news">Show more</Link></button>
      </div>
      <News simplified={true}/> 
    </>
  );
};

export default Homepage; 