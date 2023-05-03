import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar/Sidebar";

function Layout({ children }) {
    return (
      <div className="flex">
        <div className="w-60">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <div className="mt-28">{children}</div>
        </div>
      </div>
    );
  }
  
  export default Layout;
  