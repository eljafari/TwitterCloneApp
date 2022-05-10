import React from "react";
import Widgets from "./Widgets/Widgets";
import Sidebar from "./SideBar/Sidebar";
import Feed from "./Feed/Feed";
import Home from "./HomePage/Home";
import WidgetsHome from "./Widgets/WidgetsHome";

export function HomeApp() {
    return (
        <div className="app">
            <Sidebar />
            <Home />
            <WidgetsHome />
        </div>
    );
}
export function Profile() {
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}
