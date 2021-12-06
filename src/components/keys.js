import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Keys = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Обработка событий</h1>
            <p>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены.
              Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:</p>
            <div className="code-block">
              <pre><code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}
              </code></pre>
            </div>
            <p>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей.
              Чаще всего вы будете использовать ID из ваших данных как ключи:</p>
            <div className="code-block">
              <pre><code>{`const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);`}
              </code></pre>
            </div>
            <p className="subtitle">Извлечение компонентов с ключами</p>
            <p>Ключи нужно определять непосредственно внутри массивов.</p>
            <p>Например, если вы извлекаете компонент ListItem,
              то нужно указывать ключ для <code>&lt;ListItem /&gt;</code> в массиве, а не в элементе <code>&lt;li&gt;</code> внутри самого <code>ListItem</code>.</p>
            <div className="code-block">
              <pre><code>{`function ListItem(props) {
  // Правильно! Не нужно определять здесь ключ:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Правильно! Ключ нужно определять внутри массива:
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);`}
              </code></pre>
            </div>
            <p className="subtitle">Встраивание map() в JSX</p>
            <p>В примерах выше мы отдельно определяли переменную listItems и вставляли её в JSX:</p>
            <div className="code-block">
              <pre><code>{`function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
`}
              </code></pre>
            </div>
            <p>JSX позволяет встроить любое выражение в фигурные скобки, так что мы можем включить результат выполнения <code>map()</code>: </p>
            <div className="code-block">
              <pre><code>{`function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
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

export default Keys;
