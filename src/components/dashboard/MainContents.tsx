"use client";
import { Layout } from "antd";
import TitleBreadCrumb from "./TitleBreadCrumb";

const { Content } = Layout;

const MainContents = ({ children }: { children: React.ReactNode }) => {
    const base = "admin";
    return (
        <Content
            style={{
                minHeight: "100vh",
                color: "black",
            }}
        >
            <TitleBreadCrumb
                items={[
                    {
                        label: `${base}`,
                        link: `/${base}`,
                    },
                    {
                        label: "student",
                        link: `/${base}/student`,
                    },
                ]}
            />
            {children}
        </Content>
    );
};

export default MainContents;