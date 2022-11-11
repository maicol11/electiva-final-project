import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
import MenuTop from "../components/MenuComponents/MenuTop";
import { MenuSider } from "../components/MenuComponents/MenuSlider/MenuSider";
import {GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/Admin/SignIn/SignIn";

export default function LayoutAdmin(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const {Header, Content, Footer} = Layout;
    const {children} = props;
    const user = null;

    if(!user) {
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/admin/login/*" element={<SignIn />} />
                </Routes>
            </>
        )
    }

    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout style={{marginLeft: menuCollapsed ? "80px": "200px"} }>
                <Header className="layout-admin_header">
                    <MenuTop 
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-admin_content">{children}</Content>
                <Footer className="layout-admin_footer">
                    <Button type="link" onClick={() => console.log("Github")}>
                        <GithubOutlined style={{fontSize: "17px" }} /> UM 2022
                    </Button>
                </Footer>
            </Layout>
        </Layout>
    );

}