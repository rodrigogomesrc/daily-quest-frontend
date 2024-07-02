import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Content } from "antd/lib/layout/layout";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Sidebar />
      <Layout style={{ marginLeft: "70px", marginTop: "60px" }}>
        <Content style={{ padding: "20px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
