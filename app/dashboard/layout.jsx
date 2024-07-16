
import Footer from '../ui/dashboard/footer/footer';
import Sidebar from '../ui/dashboard/navbar/sideBar';
const Layout = ({ children }) => {
    return (
        <div >
            <div >
                <Sidebar />
            </div>
            <div >
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
