import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import Icon from "./Icon";
import Link from "next/link";
import { useRouter } from "next/router";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState<string>("1");

  useEffect(() => {
    // Mapear as rotas para as chaves do menu
    const routeToKey: Record<string, string> = {
      "/inicio": "1",
      "/tarefas-dia": "2",
      "/minhas-tarefas": "3",
      "/trilhas": "4",
    };

    // Obter a chave correspondente à rota atual
    const currentKey = routeToKey[router.pathname] || "1";
    setSelectedKey(currentKey);
  }, [router.pathname]);

  return (
    <Sider className="site-layout-background">
      <Menu mode="inline" selectedKeys={[selectedKey]} className="custom-menu">
        <Menu.Item
          key="1"
          icon={<Icon name="dashboard" selected={selectedKey === "1"} />}
        >
          <Link href="/inicio">Início</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<Icon name="vital" selected={selectedKey === "2"} />}
        >
          <Link href="/tarefas-dia">Tarefas do Dia</Link>
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<Icon name="tasks" selected={selectedKey === "3"} />}
        >
          <Link href="/minhas-tarefas">Minhas Tarefas</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<Icon name="categories" selected={selectedKey === "4"} />}
        >
          <Link href="/trilhas">Trilhas</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
