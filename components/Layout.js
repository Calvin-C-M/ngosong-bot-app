import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-5">
                { children }
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <Sidebar />
        </div>
    );
}
 
export default Layout;