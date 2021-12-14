import React from 'react';
import logo from './../logo.svg';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const menuItems = [
  {
    id: 'home',
    link: '/home',
    name: 'Home'
  },
  {
    id: 'components',
    link: '/components',
    name: 'Components'
  },
  {
    id: 'props',
    link: '/props',
    name: 'Props'
  },
  {
    id: 'state',
    link: '/state',
    name: 'State'
  },
  {
    id: 'lifecycle',
    link: '/lifecycle',
    name: 'Lifecycle'
  }, {
    id: 'events',
    link: '/events',
    name: 'Events'
  },
  {
    id: 'keys',
    link: '/keys',
    name: 'Keys'
  },
  {
    id: 'refs',
    link: '/refs',
    name: 'Refs'
  },
  {
    id: 'async',
    link: '/async',
    name: 'Async'
  },
  {
    id: 'dom',
    link: '/dom',
    name: 'Virtusl DOM'
  },
  {
    id: 'fragment',
    link: '/fragment',
    name: 'Rect.Fragment'
  },
  {
    id: 'memo',
    link: '/memo',
    name: 'Rect.Memo'
  },
  {
    id: 'useeffect',
    link: '/useeffect',
    name: 'useEffect'
  },
  {
    id: 'router',
    link: '/router',
    name: 'Router'
  },
  {
    id: 'context',
    link: '/context',
    name: 'Context'
  },
  {
    id: 'form',
    link: '/form',
    name: 'Work with form'
  }
]

const HeaderComp = ({ corentLink, ...props }) => {
  const correntLink = document.location.pathname.slice(1);
  const menuItem = menuItems.map((menu) =>
    <Menu.Item key={menu.id}>
      <Link to={menu.link}>{menu.name}</Link>
    </Menu.Item>
  )

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[correntLink]}>
        <Menu.Item key="react">
          <img src={logo} className="app-logo" alt="logo" />
          React
        </Menu.Item>
        {menuItem}
      </Menu>
    </Header>
  )
}

export default HeaderComp;