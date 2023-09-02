import React, { useState } from "react";
import { WriteArticleForm } from "../../components";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import "./Dashboard.css"; // Import the CSS file

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const menuLabels = ["Write", "Published", "Profile"];
  const menuIcons = [LaptopOutlined, NotificationOutlined, UserOutlined];

  const menuItems = menuLabels.map((label, index) => {
    const key = `sub${index + 1}`;
    return {
      key: key,
      icon: React.createElement(menuIcons[index]),
      label: label,
    };
  });

  // Define your components here
  const PublishedComponent = () => <div>Published Component</div>;
  const ProfileComponent = () => <div>Profile Component</div>;

  const components = {
    Write: WriteArticleForm,
    Published: PublishedComponent,
    Profile: ProfileComponent,
  };

  const [activeComponent, setActiveComponent] = useState("Write");

  const handleMenuClick = e => {
    setActiveComponent(e.key);
  };

  const ComponentToRender = components[activeComponent];

  return (
    <Layout>
      <Header className="header">
        <div className="demo-logo">Hi Prem</div>
      </Header>
      <Layout>
        <Sider className="sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={["Write"]}
            onClick={handleMenuClick}
            className="menu"
          >
            {menuItems.map(item => (
              <Menu.Item key={item.label} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="layout">
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              Admin / Dashboard / {activeComponent}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Content className="content">
            <ComponentToRender />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
