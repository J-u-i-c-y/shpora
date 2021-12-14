import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Memo = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">React.Memo</h1>
            <div className="code-block">
              <pre><code>{`const MyComponent = React.memo(function MyComponent(props) {
  /* рендер с использованием пропсов */
});`}
              </code></pre>
            </div>
            <p><code>React.memo</code> — это компонент высшего порядка.</p>
            <p>Если ваш компонент всегда рендерит одно и то же при неменяющихся пропсах,
              вы можете обернуть его в вызов <code>React.memo</code> для повышения производительности в некоторых случаях,
              мемоизируя тем самым результат. Это значит, что React будет использовать результат последнего рендера, избегая повторного рендеринга.</p>
            <p><code>React.memo</code> затрагивает только изменения пропсов. Если функциональный компонент обёрнут в <code>React.memo</code> и использует <code>useState</code>, <code>useReducer</code> или <code>useContext</code>,
              он будет повторно рендериться при изменении состояния или контекста.</p>
            <p>По умолчанию он поверхностно сравнивает вложенные объекты в объекте <code>props</code>.
              Если вы хотите контролировать сравнение, вы можете передать свою функцию сравнения в качестве второго аргумента.</p>
            <div className="code-block">
              <pre><code>{`function MyComponent(props) {
  /* рендер с использованием пропсов */
}
function areEqual(prevProps, nextProps) {
  /*
  возвращает true, если nextProps рендерит
  тот же результат что и prevProps,
  иначе возвращает false
  */
}
export default React.memo(MyComponent, areEqual);`}
              </code></pre>
            </div>
            <p>Этот метод предназначен только для <b>оптимизации производительности</b>. Не полагайтесь на него, чтобы «предотвратить» рендер, так как это может привести к ошибкам.</p>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Memo;
