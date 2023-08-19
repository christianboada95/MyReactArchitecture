import { Outlet } from "react-router-dom";

export function DashboardLayout(){
    return <>
        <header></header>
        <nav><menu></menu></nav>
        <main> <Outlet /> </main>
        <footer></footer>
    </>
}