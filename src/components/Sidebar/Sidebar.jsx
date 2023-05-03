import OrderIcon from "../icons/OrderIcon"
import ShopicallerSiderbarIcon from "../icons/ShopiCallerSidebarIcon"
import StatisticIcon from "../icons/StatisticIcon"
import ClientIcon from "../icons/clientIcon"
import HomeIcon from "../icons/homeIcon"
import ProductIcon from "../icons/productIcon"
import ProfileIcon from "../icons/profileIcon"
import ScIcon from "../icons/scIcon"
import SidebarCart from "./SidebarCart"
import LightDark from "./lightDark"
import { useEffect, useState } from "react"


function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

return ( 

<div className="lg:w-60 max-[1024px]:w-[94px] px-4 py-8 h-screen     ">
  <div className="pb-20 pt-3 pl-4 items-center justify-center">
    
  {/* <ShopicallerSiderbarIcon/> */}
  {isMobile ? <div className="ml-[-20px]"><ScIcon /> </div> : <ShopicallerSiderbarIcon/>}
  </div>
  
  
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
  <div className="absolute bottom-0">
  <LightDark/>
  </div>
</div>


        )
    } 
    export default Sidebar