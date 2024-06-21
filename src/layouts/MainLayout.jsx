import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
    return (
        <div className="font-lato bg-white">
            <div className="h-[64px] lg:h-[72px]">
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainLayout;