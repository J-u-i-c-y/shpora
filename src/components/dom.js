import React from 'react';
import HeaderComp from './header';
import FooterComp from './footer';
import { Layout } from 'antd';

const { Content } = Layout;

const Dom = () => {
  return (
    <div className="App">
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '50px 50px 0' }}>
          <div className="site-layout-content">
            <h1 className="main-title">Virtual DOM</h1>
            <p>Вместо того, чтобы взаимодействовать с DOM напрямую, мы работаем с его легковесной копией.
              Мы можем вносить изменения в копию, исходя из наших потребностей, а после этого применять изменения к реальному DOM.
              При этом происходит сравнение DOM-дерева с его виртуальной копией, определяется разница и запускается перерисовка того, что было изменено.
            </p>
            <p>Такой подход работает быстрее, потому как не включает в себя все тяжеловесные части реального DOM.<br />
              Но только если мы делаем это правильно. Есть две проблемы: когда именно делать повторную перерисовку DOM и как это сделать эффективно.</p>
            <div className="subtitle">Когда?</div>
            <p>Когда данные изменяются и нуждается в обновлении.<br />
              Есть два варианта узнать, что данные изменились:</p>
            <ul>
              <li>Первый из них — «dirty checking» (грязная проверка) заключается в том, чтобы опрашивать данные через регулярные промежутки времени и рекурсивно проверять все значения в структуре данных.</li>
              <li>Второй вариант — «observable» (наблюдаемый) заключается в наблюдении за изменением состояния. Если ничего не изменилось, мы ничего не делаем. Если изменилось, мы точно знаем, что нужно обновить.</li>
            </ul>
            <div className="subtitle">Как?</div>
            <p>Что делает этот подход действительно быстрым:</p>
            <ul>
              <li>Эффективные алгоритмы сравнения</li>
              <li>Группировка операций чтения/записи при работе с DOM</li>
              <li>Эффективное обновление только под-деревьев</li>
            </ul>
          </div>
        </Content>
        <FooterComp />
      </Layout>
    </div>
  )
}

export default Dom;
