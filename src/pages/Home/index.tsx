/* eslint-disable no-use-before-define */
import React, { memo, useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import api from '../../services/api';

interface Articles {
  relatedSearch: [string];
  value: [
    {
      id: string;
      title: string;
      url: string;
      description: string;
      body: string;
      keywords: [string];
      language: string;
      isSafe: boolean;
      datePublished: string;
      image: {
        url: string;
        height: number;
        width: number;
        thumbnail: string;
        thumbnailHeight: number;
        thumbnailWidth: number;
      };
    },
  ];
}

const Home: React.FunctionComponent = () => {
  const [newsWorld, setNewsWorld] = useState<Articles[]>([]);
  const [newsTechnology, setNewsTechnology] = useState<Articles[]>([]);
  const [newsEconomy, setNewsEconomy] = useState<Articles[]>([]);

  const [loading, setLoading] = useState(false);

  // const handleNews = (articles: Articles[]) => {
  //   console.log('=aki===================================');
  //   console.log(articles);
  //   console.log('====================================');
  // };

  useEffect(() => {
    setLoading(true);

    api.get('world').then(response => {
      setNewsWorld(response.data);
    });

    api.get('technology').then(response => {
      setNewsTechnology(response.data);
    });

    api.get('economy').then(response => {
      setNewsEconomy(response.data);
    });
  }, []);

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>Technology</h2>
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>Economy</h2>
        </Col>
      </Row>
    </>
  );
};

export default Home;
