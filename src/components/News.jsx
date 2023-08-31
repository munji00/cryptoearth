import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

//import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
import { useGetCryptosQuery } from '../services/cryptoApi';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select; 

const News = ({ simplified }) => {
  const count = simplified ? 7:13;
  const [newsCategory, setNewsCategory] = useState('CryptoCurrency');
  const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory, count});
  const {data} = useGetCryptosQuery(100);
  console.log(cryptoNews);

  if(!cryptoNews?.value) return "Laoding";

  return(
    <Row gutter={[24, 24]}>
      {
        !simplified && (
          <Col span ={24}>
            <Select 
            showSeacrch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
               <Option value = "Cryptocurrency">Cryptocurrency</Option>
               {data?.data?.coins.map((coin) => <Option vlaue={coin.name}>{coin.name}</Option>)}
            </Select>
          </Col>
        )
      }
      {cryptoNews?.value.map((news, i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={5} >{news.name}</Title>
              <img style={{maxWidth:'200px', maxHeight:'100px'}}src={news?.image?.thumbnail?.contentUrl || demoImage } alt="news image"/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0, 100)}...`
                :news.description
                }
              </p>
              <div className="provider-container">
                <Avatar src={news.provider[0].image?.thumbnail?.contentUrl || demoImage} alt ="" />
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default News;