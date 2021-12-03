import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Components = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Components page</h1>
            <div className="subtitle">Компоненты бывают
              <a rel="noopener noreferrer"
                href="https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components"
                target="_blank">
                Функциональный и Классовый
              </a>.
            </div>
            <div className="subtitle">Функцинальный компонент</div>
            <div className="code-block">
              <pre><code>{`function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}`}
              </code></pre>
            </div>
            <div className="subtitle">Классовый компонент</div>
            <div className="code-block">
              <pre><code>{`class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}`}
              </code></pre>
            </div>
            <div className="subtitle">React.PureComponent</div>
            <p>React.PureComponent похож на React.Component. Отличие заключается в том, что React.Component не реализует shouldComponentUpdate(), а React.PureComponent реализует его поверхностным сравнением пропсов и состояния.</p>
            <p>Если метод render() вашего React-компонента всегда рендерит одинаковый результат при одних и тех же пропсах и состояниях, для повышения производительности в некоторых случаях вы можете использовать React.PureComponent.</p>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Components;
