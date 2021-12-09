import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Fragment = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Фрагменты</h1>
            <p>Компонента не может возвращать несколько элементов, а может только один.
              И для этого нам нужно обернуть весь код в родительский элемент например <code>div</code></p>
            <div className="code-block">
              <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привет</td>
        <td>Мир</td>
      </div>
    );
  }
}

<table>
  <tr>
    <div>
      <td>Привет</td>
      <td>Мир</td>
    </div>
  </tr>
</table>`}
              </code></pre>
            </div>
            <p>В примере выше мы обернули элементы в <code>div</code> и при рендоре он добавиться в <code>DOM</code></p>
            <p>Если мы хотим этого избежать, мы можем использовать <code>&lt;Fragment /&gt;</code></p>
            <div className="code-block">
              <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привет</td>
        <td>Мир</td>
      </React.Fragment>
    );
  }
}

<table>
  <tr>
    <td>Привет</td>
    <td>Мир</td>
  </tr>
</table>`}
              </code></pre>
            </div>
            <p>Так же можно использовать сокращенную запись:</p>
            <div className="code-block">
              <pre><code>{`class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Привет</td>
        <td>Мир</td>
      </>
    );
  }
}`}
              </code></pre>
            </div>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Fragment;
