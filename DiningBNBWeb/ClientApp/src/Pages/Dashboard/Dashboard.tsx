import { Button, Col, Menu, Row, Tooltip, Layout } from 'antd';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from './Dashboard.module.scss';
import Home from './Home/Home';
import Settings from './Settings/Settings.lazy';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => { 
  let { path, url } = useRouteMatch();
  return (
  <Layout className="full-height">
    <Header className={styles.Header}>
      <Row justify="space-between">
        <Col>
          <Menu mode="horizontal">
            <Menu.Item key="dashboard">
              <Link to={`${url}`}>Dashboard</Link>
              </Menu.Item>
            <Menu.Item key="settings">
              <Link to={`${url}/settings`}>Settings</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col>
          <Tooltip title="Notifications">
            <Button shape="circle" icon={<BellOutlined />} style={{margin: '0 4px'}} />
          </Tooltip>
          <Tooltip title="Account">
            <Button shape="circle" icon={<UserOutlined />} style={{margin: '0 4px'}} />
          </Tooltip>
        </Col>
      </Row>
    </Header>
    <Switch>
      <Route exact path={path}>
        <Home></Home>
      </Route>
      <Route path={`${path}/settings`}>
        <Settings></Settings>
      </Route>
    </Switch>
  </Layout>
  );
}

export default Dashboard;
