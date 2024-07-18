
import Footer from '../ui/dashboard/footer/footer';
import Sidebar from '../ui/dashboard/navbar/sideBar';
import Navbar from '../ui/dashboard/top-navbar/navbar';
const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='basis-1/6 bg-[#182237] p-5'>
                <Sidebar />
            </div>
            <div className='basis-5/6 p-5 relative'>
                <Navbar/>
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
