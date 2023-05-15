// import Navbar from "../components/navbar";
// import Sidebar from "../components/Sidebar/Sidebar";
// import { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';

// function Layout({ children }) {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleHamburgerMenuClick = () => {
//     setIsClicked(true);
//     console.log("Hamburger menu clicked");
//   };
//   const handleButtonClick = (value) => {
//     setIsClicked(value);
//   };
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleWindowResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleWindowResize);

//     return () => {
//       window.removeEventListener("resize", handleWindowResize);
//     };
//   });

//   const location = useLocation();
//   const isSignInPage = location.pathname === '/Signin';

//   return (
//     <div className="flex">
//       {!isSignInPage && (
//         <div className="max-[375px]:w-screen ">
//           {windowWidth <= 375 && !isClicked ? null : (
//             <Sidebar onClick={handleButtonClick} />
//           )}
//         </div>
//       )}
//       <div className="w-full">
//         {!isSignInPage && <Navbar onHamburgerMenuClick={handleHamburgerMenuClick} />}
//         <div className="mt-28">{children}</div>
//       </div>
//     </div>
//   );
// }

// export default Layout;
import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useState, useEffect } from "react";

function Layout({ children }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleHamburgerMenuClick = () => {
    setIsClicked(true);
    console.log("Hamburger menu clicked");
  };
  const handleButtonClick = (value) => {
    setIsClicked(value);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="flex">
      <div className="max-[375px]:w-screen ">
         { windowWidth <= 375 && !isClicked ? 
        null : <Sidebar  onClick={handleButtonClick}/> } 
       
      </div>
      <div className="w-full">
        <Navbar onHamburgerMenuClick={handleHamburgerMenuClick} />
        <div className="mt-28">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
