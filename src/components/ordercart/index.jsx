import ShopOrderIcon from "../icons/shopOrderIcon";

function OrderCart({orderNumber,userText, color= "bg-red-200", time}) {
    return (
        <div className="flex flex-row  w-80">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center border mt-4 border-gray-300">
                      {/* shop icon */}
                      <ShopOrderIcon/>
                    </div>
                    <div className="ml-4 mt-4">
                      <div className="text-xl font-bold text-gray-800 text">
                        Commande n∼{orderNumber}
                      </div>
                      <div className="flex flex-row">
                        <div className={`w-auto px-2 h-8 mt-2 col3 rounded-md flex ${color}`}>
                        {/* {` ${}`} */}
                          <b>
                            <p className="ml-2 pt-1">{userText}</p>
                          </b>
                        </div>
                        <div className="w-auto h-7 ml-1 rounded-lg border mt-2.5 flex flex-row px-2">
                          <img
                            className="h-6 mt-0.5 ml-0.5 mb-1 rounded-md"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                          />
                          <b>
                            <p className="text-gray-400 ml-2 ">{time}</p>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>

    )
}
export default OrderCart ;