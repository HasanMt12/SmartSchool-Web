"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";

import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";

const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const role = USER_ROLE.ADMIN;

    return (
        <Sider
            className="SiderCustom"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            {collapsed ? "" : <div
              
                style={{
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                Smart School
            </div>}   
           
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(role)}
            />
        </Sider>
    );
};

export default Sidebar;