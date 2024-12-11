import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidenav from "./sidenav";
import Footer from "./footer";

function Layout(){
    return(
        <>
        <Header />
        <section>
            <Sidenav />
        <article>
            <Outlet />
        </article>
        </section>
        <Footer />
        </>
    );
}

export default Layout;