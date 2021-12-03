import Components from './components/components';
import Home from './components/home';
import Props from './components/props';
import State from './components/state';
import Lifecycle from './components/lifecycle';
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
