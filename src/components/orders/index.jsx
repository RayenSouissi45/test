import SimpleButton from "../button/simpleButton";
import ArrowRightIcon from "../icons/arrowRightIcon";
import OrderCart from "../ordercart";

function Orders () {
    return (
        <div className="h-auto  rounded-lg  ml-8 pb-8 mt-6 mb-6  w-[672px] bg-white">
                <div className="flex flex-row items-center py-8 px-2 bg-white h-28 mx-2 ">
                  <div className="flex flex-row">
                    <div className="col4 w-4 h-8 rounded-md" />
                    <b>
                      <h5 className="text-lg tracking-wider ">
                        Commandes
                      </h5>
                    </b>
                  </div>
                  {/* <button className="bg-white hover:bg-gray-50 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl ml-80 w-48 ">
                    <p className="pl-4">Voir tous</p>
                    <div className="pb-2 pl-2 ml-2">
                    <ArrowRightIcon/>
                    </div>
                  </button> */}
                  <div className="">
                  <SimpleButton text="Voir tous">
                    <ArrowRightIcon/>
                  </SimpleButton>
                  </div>
                </div>
                <div className="flex space-x-2">
  <div className="flex flex-col">
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="12567" userText="URIAGE" color="bg-purple-300" time="1hour and 2nute"/>
    </div>
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="12412" userText="LA ROCHE POSAY" color="bg-green-200" time="10mins"/>
    </div>
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="8312" userText="Vichy" color="bg-green-500" time="15mins"/>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="1241" userText="SVR" color="bg-orange-300" time="25mins"/>
    </div>
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="12223" userText="DERMEDIC" color="bg-green-100" time="22mins"/>
    </div>
    <div className="bg-white w-84 h-32 rounded-2xl flex items-center ml-4">
      <OrderCart orderNumber="13233" userText="EZDEEN" color="bg-green-400" time="51mins"/>
    </div>
  </div>
</div>

              </div>

 
        )
}
export default Orders ;