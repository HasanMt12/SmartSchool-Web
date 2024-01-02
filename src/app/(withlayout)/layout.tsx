import MainContents from "@/components/dashboard/MainContents";
import Sidebar from "@/components/dashboard/Sidebar";


import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Layout hasSider>
            <Sidebar />
            <MainContents>{children}</MainContents>
        </Layout>
    );
};

export default DashboardLayout;