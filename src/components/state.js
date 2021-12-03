import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const State = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">State's page</h1>
            <div className="code-block">
              <pre><code>{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}
              </code></pre>
            </div>
            <p>Обратите внимание, что мы передаём props базовому (родительскому) конструктору:</p>
            <div className="code-block">
              <pre><code>{`constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }`}
              </code></pre>
            </div>
            <p>Классовые компоненты всегда должны вызывать базовый конструктор с аргументом props.</p>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default State;
