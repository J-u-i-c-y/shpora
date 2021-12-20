import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const ReactContext = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Context</h1>
            <p>Контекст разработан для передачи данных, которые можно назвать «глобальными» для всего дерева
              React-компонентов (например, текущий аутентифицированный пользователь, UI-тема или выбранный язык).</p>
            <p className="subtitle"><code>React.createContext</code></p>
            <div className="code-block">
              <pre><code>{`const MyContext = React.createContext(defaultValue);`}
              </code></pre>
            </div>
            <p>Создаёт объект <code>Context</code>.Когда React рендерит компонент, который подписан на этот объект,
              React получит текущее значение контекста из ближайшего подходящего <code>Provider</code> выше в дереве компонентов.</p>
            <p>Аргумент <code>defaultValue</code> используется <b>только</b> в том случае, если для компонента нет подходящего <code>Provider</code> выше в дереве.
              Значение по умолчанию может быть полезно для тестирования компонентов в изоляции без необходимости оборачивать их.
              Обратите внимание: если передать <code>undefined</code> как значение <code>Provider</code>, компоненты, использующие этот контекст,
              не будут использовать <code>defaultValue</code>.</p>
            <p className="subtitle">Context.Provider</p>
            <div className="code-block">
              <pre><code>{`<MyContext.Provider value={/* некоторое значение */}>`}
              </code></pre>
            </div>
            <p>Каждый объект <code>Context</code> используется вместе с <code>Provider</code> компонентом, который позволяет дочерним компонентам,
              использующим этот контекст, подписаться на его изменения</p>
            <p>Компонент <code>Provider</code> принимает проп <code>value</code>, который будет передан во все компоненты,
              использующие этот контекст и являющиеся потомками этого компонента <code>Provider</code>.Один <code>Provider</code> может быть связан с несколькими компонентами,
              потребляющими контекст.Так же компоненты <code>Provider</code> могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.</p>
            <p className="subtitle">Context.Consumer</p>
            <div className="code-block">
              <pre><code>{`<MyContext.Consumer>
  {value => /* отрендерить что-то, используя значение контекста */}
</MyContext.Consumer>`}
              </code></pre>
            </div>
            <p><code>Consumer</code> — это React-компонент, который подписывается на изменения контекста.В свою очередь,
              использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.</p>
            <p><code>Consumer</code> принимает функцию в качестве дочернего компонента.Эта функция принимает текущее значение контекста и возвращает React-компонент.
              Передаваемый аргумент <code>value</code> будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу <code>value</code> компонента <code>Provider</code>.
              Если такого компонента <code>Provider</code> не существует, аргумент <code>value</code> будет равен значению <code>defaultValue</code>, которое было передано в <code>createContext()</code>.</p>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default ReactContext;
