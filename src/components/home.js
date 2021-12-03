import React from 'react';
import reactImg from './../react.jpeg';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout, Image } from 'antd';

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <HeaderComp />
      <Content style={{ padding: '50px 50px 0' }}>
        <div className="site-layout-content">
          <h1 className="main-title">Welcome to my cheat sheet</h1>
          <Image src={reactImg} alt={"react"} />
        </div>
      </Content>
      <FooterComp />
    </Layout>
  )
}

export default Home;