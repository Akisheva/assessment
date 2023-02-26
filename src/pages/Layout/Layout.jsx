import { Outlet} from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './layout.scss'

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Header/>
            <Outlet/>       
            <Footer/>
        </div>
    )
}

export default Layout