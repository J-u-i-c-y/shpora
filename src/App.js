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
