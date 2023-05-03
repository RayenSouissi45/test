import Sidebar from "../components/Sidebar/Sidebar";
import BestSellingProducts from "../components/bestSellingProducts";
import GetMoreCustomers from "../components/getMoreCustomers";
import GlobalView from "../components/globalView";
import MostLoyalCustomers from "../components/mostLoyalCustomers";
import Navbar from "../components/navbar";
import Orders from "../components/orders";
import OrderGlobalView from "../components/ordersGlobalView";
import RejectedCalls from "../components/rejectedCalls";

function Dashboard() {
    return (
      <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link href="./dist/output.css" rel="stylesheet" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div className="flex flex-row bg-gray-100 overflow-y-hidden
">
        
        {/* <Sidebar /> */}
        <div className="flex flex-col w-full pt-112 h-screen overflow-y-scroll
">
          {/* <Navbar/> */}
          <div className=" mt-[130px]">
            <b>
              <h1 className="text-3xl pl-8 pt-8 pb-4">Dashboard</h1>
            </b>
          </div>
          <div className="flex flex-row  ">
            <div className="flex flex-col h-full ">
              <GlobalView/>
              <OrderGlobalView/>
              <Orders/>
              <GetMoreCustomers/>
            </div>
            {/* Third container*/}
            <div className="flex flex-col justify-center items-center  h-auto">
              <BestSellingProducts/>
              <MostLoyalCustomers/>
              <RejectedCalls/>
            </div>
          </div>
        </div>
      </div>
    </>
    )}
  export default Dashboard ;