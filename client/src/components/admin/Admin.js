import React from 'react';
import { Menu, Layout } from 'antd';
import { Link, Route } from "react-router-dom";

import MaraphonsAdd from "../maraphons/Add";
import MaraphonsList from "../maraphons/List";
import MaraphonNews from "../maraphons/News";
import TrainingsAdd from "../trainings/Add";
import TrainingsList from "../trainings/List";
import Account from "../../components/admin/Account"

const { Content, Sider } = Layout;

function handleClick(e) {
  console.log('click', e);
}

function Admin() {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <Sider>
          <Menu
            onClick={handleClick}
            mode="vertical"
            theme="dark"
          >
            <Menu.Item key="1"><Link to="/admin/account">Мой профиль</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/maraphons/list">Мои марафоны</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/admin/maraphons/add">Добавить марафон</Link></Menu.Item>
            {/* <Menu.Item key="2"><Link to="/admin/trainings/list">Мои тренировки</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/admin/trainings/add">Добавить тренировку</Link></Menu.Item> */}
          </Menu>
        </Sider>
        <Content style={{ padding: '0 50px' }}>
          <Route path={"/admin/account"} component={Account} />
          <Route path={"/admin/maraphons/list"} component={MaraphonsList} />
          <Route path={"/admin/maraphons/add"} component={MaraphonsAdd} />
          <Route path={"/admin/maraphons/news"} component={MaraphonNews} />
          <Route path={"/admin/trainings/list"} component={TrainingsList} />
          <Route path={"/admin/trainings/add"} component={TrainingsAdd} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Admin;