import Components from './components/components';
import Home from './components/home';
import Props from './components/props';
import State from './components/state';
import Lifecycle from './components/lifecycle';
import Events from './components/events';
import Keys from './components/keys';
import Refs from './components/refs';
import Async from './components/async';
import Dom from './components/dom';
import Fragment from './components/fragment';
import Memo from './components/memo';
import Effect from './components/useeffects';
import Router from './components/router';
import ReactContext from './components/context';
import ReactForm from './components/form';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/props" element={<Props />} />
            <Route path="/state" element={<State />} />
            <Route path="/lifecycle" element={<Lifecycle />} />
            <Route path="/events" element={<Events />} />
            <Route path="/keys" element={<Keys />} />
            <Route path="/refs" element={<Refs />} />
            <Route path="/async" element={<Async />} />
            <Route path="/dom" element={<Dom />} />
            <Route path="/fragment" element={<Fragment />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/useeffect" element={<Effect />} />
            <Route path="/router" element={<Router />} />
            <Route path="/context" element={<ReactContext />} />
            <Route path="/form" element={<ReactForm />} />
            <Route path='/components-page' element={() => {
              window.location.href = 'https://ru.reactjs.org/docs/components-and-props.html#function-and-class-components';
              return null;
            }} />
            <Route path="*" element={<Navigate replace to="/home" />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
