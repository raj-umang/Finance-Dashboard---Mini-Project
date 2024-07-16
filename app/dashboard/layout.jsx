
import Footer from '../ui/dashboard/footer/footer';
import Sidebar from '../ui/dashboard/navbar/sideBar';
const Layout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='flex-1 bg-[#182237] p-5'>
                <Sidebar />
            </div>
            <div className='flex-4 p-5 relative'>
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
