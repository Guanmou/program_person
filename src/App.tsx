import React from 'react';
import { Layout, Menu} from 'antd';
import 'antd/dist/antd.less';
import styles from './App.module.less';
import {
  TrademarkOutlined,
  GithubOutlined,
  PartitionOutlined,
  MediumOutlined,
  BoxPlotOutlined,
  FrownOutlined,
} from '@ant-design/icons';
import RouteComponent from './router';
import { Link,withRouter,RouteComponentProps } from 'react-router-dom';
const { Sider, Content } = Layout;

class App extends React.Component<RouteComponentProps> {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <Layout className={styles.layout}>
        <Sider className={styles.sider} theme="light" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>
            <Menu.Item key="/" icon={<GithubOutlined />}>
              <Link to="/">简介</Link>
            </Menu.Item>
            <Menu.Item key="/ManageStatusComponent" icon={<PartitionOutlined />}>
              <Link to="/ManageStatusComponent">状态管理总结</Link>
            </Menu.Item>
            <Menu.Item key="/WebPackComponent" icon={<BoxPlotOutlined />}>
              <Link to="/WebPackComponent">WebPack</Link>
            </Menu.Item>
            <Menu.SubMenu key="/React" icon={<TrademarkOutlined />} title="React进阶">
              <Menu.Item>
                <Link to="/ReactComponent">React生命周期</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/Hooks">Hooks</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="/MicoSpaComponent" icon={<MediumOutlined />}>
              <Link to="/MicoSpaComponent">微前端</Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<FrownOutlined />} title="踩坑日记">
              <Menu.Item key="/LessDisabled">
                <Link to="/LessDisabled">less失效</Link>
              </Menu.Item>
              <Menu.Item key="6">Option 10</Menu.Item>
              <Menu.Item key="7">Option 11</Menu.Item>
              <Menu.Item key="8">Option 12</Menu.Item>
              <Menu.Item key="10">Option 12</Menu.Item>
              <Menu.Item key="11">Option 12</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout className={styles.right}>
          {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header> */}
          <Content
            className={styles.content}
            style={{
              padding: 24,
            }}
          >
            <RouteComponent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(App);