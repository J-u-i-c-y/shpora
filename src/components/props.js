import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Props = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Пропсы</h1>
            <div className="code-block">
              <pre><code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`}
              </code></pre>
            </div>
            <p>Когда React встречает подобный элемент, он собирает все JSX-атрибуты и дочерние элементы в один объект и передаёт их нашему компоненту. Этот объект называется «пропсы» (props).</p>
            <p>Например, этот компонент выведет «Привет, Алиса» на страницу:</p>
            <div className="code-block">
              <pre><code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);`}
              </code></pre>
            </div>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Props;
