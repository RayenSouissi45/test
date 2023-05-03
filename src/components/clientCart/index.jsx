import Decrease from "../decrease/decrease";
import Increase from "../increase/increase";



function ClientCart({state,percentNumber}) {
    return (
        <div className="flex flex-row mt-12  h-[84px] border-b  ">
                  <div className="flex-row w-[42px] h-[57px] rounded-full  ml-12">
                    <img
                      className="w-16 h-16 rounded-full"
                      src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                    />
                  </div>
                  <div className="flex flex-col">
                    <b>
                      <p className="pl-4 pt-2">Hazem Abid</p>
                    </b>
                    <p className="pl-4 pt-2 text-xs">hazeabidi@gmail.com</p>
                  </div>
                  <div className="flex flex-col ">
                    <div className="bg-gray-200 h-8 w-16 rounded-lg ml-8 pl-1 pt-1">
                      564 DT
                    </div>
                    
                    {/* <div className="ml-4 mt-2">
                        
                    <Decrease percentNumber='2' color="bg-white" />
                    </div> */}
                     <div className="ml-4 mt-2">
                     {state === 'decrease' ? (
                     <Decrease percentNumber={percentNumber} color="bg-white" />
                       ) : (
                       <Increase percentNumber={percentNumber}  />
                          )}
                        </div>
                  </div>
                  <div className="border-b ml-2 mr-2 mt-2 mb-4" />
                </div>
    )
}
export default ClientCart ;