import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import SideBar from "../components/SideBar"

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <div className="row mx-3 gap-3">
                <SideBar/>
                <Outlet />
            </div>

            <Footer />
        </ScrollToTop>
    )
}