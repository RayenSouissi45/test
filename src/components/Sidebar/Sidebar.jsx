import OrderIcon from "../icons/OrderIcon"
import ShopicallerSiderbarIcon from "../icons/ShopiCallerSidebarIcon"
import StatisticIcon from "../icons/StatisticIcon"
import ClientIcon from "../icons/clientIcon"
import HomeIcon from "../icons/homeIcon"
import ProductIcon from "../icons/productIcon"
import ProfileIcon from "../icons/profileIcon"
import ScIcon from "../icons/scIcon"
import XIcon from "../icons/xIcon"
import SidebarCart from "./SidebarCart"
import LightDark from "./lightDark"
import { useEffect, useState } from "react"


function Sidebar({onClick}) {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 1024);
  //   };
  //   handleResize(); // set initial state
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
useEffect(() => {
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
});

const handleClick = () => {
  onClick(false);
};
return ( 
  // a modifier
  <div className=" px-4 py-8 h-screen  lg:w-60 max-[375px]:w-screen max-[1024px]:w-[94px] ">  
  {/* // <div className={` ${false ? 'bg-red-100' : 'bg-blue-100'}px-4 py-8 h-screen  lg:w-60 max-[375px]:w-screen max-[1024px]:w-[94px] `}>  */}
  {/* <div className={` ${isClicked ? 'hidden' : 'w-screen'}px-4 py-8 h-screen  `} >  */}
{/* <div className=" px-4 py-8 h-screen   w-hidden ">  */}


{/* //  <div className=" px-4 py-8 h-screen  lg:w-60 max-[1024px]:w-[94px]  ">  */}
  <div className="pb-20 pt-3 pl-4 items-center justify-center">
    
  {/* <ShopicallerSiderbarIcon/> */}
 {/* { <div className={`${windowWidth<376 || windowWidth>1024  ? ' hidden' : 'visible' } `}></div>} */}
 {/* {windowWidth < 375 ? (
  <div className="fixed top-[51px] left-[51px] ">
    <XIcon/>
  </div>
) : null} */}
{/* /=ml-[170px] mt-[-30px] */}
 { windowWidth > 1024 ? <div className=""> <ShopicallerSiderbarIcon/></div> : windowWidth > 375 ? <div className= ' ml-[-20px] '> <ScIcon /></div> : 
 <div className=" flex flex-row space-x-44 items-center	">
   <div> <button onClick={handleClick}> <XIcon/></button>  </div> 
   <div>  <ScIcon/></div> 
   </div>}
  {/* {isMobile ? <div className="ml-[-20px]"><ScIcon /> </div> : <ShopicallerSiderbarIcon/>} */}
  </div>
  
  <div className={`${windowWidth < 375  ? ' mt-[-50px] ml-[30px]' : '' }  `}>
  <SidebarCart text="Accueil">
    <HomeIcon/>
  </SidebarCart>
  <SidebarCart text="Produits">
    <ProductIcon/>
  </SidebarCart>
  <SidebarCart text="Clients">
    <ClientIcon/>
  </SidebarCart>
  <SidebarCart text="Commande">
    <OrderIcon/>
  </SidebarCart>
  <SidebarCart text="Statistiques">
    <StatisticIcon/>
  </SidebarCart>
  <SidebarCart text="Profile">
    <ProfileIcon/>
  </SidebarCart>
  </div>
  <div className="absolute bottom-[-50px] ">
  <LightDark/>
  </div>
</div>


        )
    } 
    export default Sidebar