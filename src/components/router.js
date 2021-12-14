import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Router = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Router</h1>
            <p>В React имеется своя система маршрутизации, которая позволяет сопоставлять запросы к приложению с определенными компонентами.
              Ключевым звеном в работе маршрутизации является модуль react-router, который содержит основной функционал по работе с маршрутизацией.
              Однако если мы собираемся работать в браузере, то нам также надо использовать модуль react-router-dom, а также history</p>
            <p>В начале для работы с маршрутами также получаем ряд объектов, которые потребуются для определения маршрутов:</p>
            <div className="code-block">
              <pre><code>{`const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Routes = ReactRouterDOM.Routes;`}
              </code></pre>
            </div>
            <p><b>Router</b> определяет набор маршрутов и, когда к приложению, приходит запрос, то <b>Router</b> выполняет сопоставление запроса с маршрутами.
              И если какой-то маршрут совпадает с URL запроса, то этот маршрут выбирается для обработки запроса.</p>
            <p>И также для выбора маршрута определен объект <b>Routes</b>. Он содержит набор маршрутов и позволяет выбрать
              первый попавшийся маршрут и его использовать для обработки.</p>
            <p>Каждый маршрут представляет объект Route. Он имеет ряд атрибутов.
              В частности, здесь для маршрута устанавливаются два атрибута:</p>
            <ul>
              <li><b>path</b>: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL</li>
              <li><b>element</b> - тот компонент, который отвечает за обработку запроса по этому маршруту</li>
            </ul>
            <p>Например, первый маршрут выступает в качестве корневого. Он сопоставляется с адресом "/" и обрабатывается компонентом Main:<br />
              Второй маршрут будет сопоставляться с адресом "/about", а обрабатываться он будет компонентом About.<br />
              Особо следует выделить третий маршрут:</p>
            <div className="code-block">
              <pre><code>{`<Route path="/" element={<Main />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<NotFound />} />`}
              </code></pre>
            </div>
            <p>Путь в виде звездочки - <b>"*"</b> указывает, что этот маршрут будет сопоставляться со всеми адресами URL,
              которые не соответствуют предыдущим маршрутам. И он будет обрабатываться компонентом NotFound.
              Таким образом мы можем задать обработку при обращении к несуществующим ресурсам в приложении.</p>
            <div className="code-block">
              <pre><code>{`class About extends React.Component{
    render(){
        return <h2>О сайте</h2>;
    }
}
class NotFound extends React.Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}
class Main extends React.Component{
    render(){
        return <h2>Главная</h2>;
    }
}
ReactDOM.render(
    <Router>
        <div>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </Router>,
    document.getElementById("app")
)`}
              </code></pre>
            </div>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Router;
