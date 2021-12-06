import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Lifecycle = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Жизненны цикл</h1>
            <div className="subtitle">Есть 3 основных метода жизненного цикла</div>
            <div className="code-block">
              <pre><code>{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
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
            <p><code>componentDidMount()</code> вызывается сразу после монтирования (то есть, вставки компонента в DOM). В этом методе должны происходить действия, которые требуют наличия DOM-узлов. Это хорошее место для создания сетевых запросов.</p>
            <p>В <code>componentDidUpdate()</code> <b>можно вызывать <code>setState()</code></b>, однако его <b>необходимо обернуть в условие</b>,
              как в примере выше, чтобы не возник бесконечный цикл. Вызов <code>setState()</code> влечет за собой дополнительный рендер,
              который незаметен для пользователя, но может повлиять на производительность компонента.
              Вместо «отражения» пропсов в состоянии рекомендуется использовать пропсы напрямую.</p>
            <p><code>componentWillUnmount()</code> вызывается непосредственно перед размонтированием и удалением компонента.
              В этом методе выполняется необходимый сброс: отмена таймеров, сетевых запросов и подписок,
              созданных в <code>componentDidMount()</code>.</p>
            <p>Не используйте <code>setState()</code> в <code>componentWillUnmount()</code>,
              так как компонент никогда не рендерится повторно. После того,
              как экземпляр компонента будет размонтирован, он никогда не будет примонтирован снова.</p>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Lifecycle;
