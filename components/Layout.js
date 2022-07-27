import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div id="content" className="flex">
            <Navbar />
            <main className="m-5">
                { children }
            </main>
            
        </div>
    );
}
 
export default Layout;