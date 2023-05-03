function OrderGlobalView () {
    return (
      
<div className=" bg-white  rounded-lg flex-grow ml-8 w-[672px] ">
                <div className="flex flex-row items-center py-8 px-2 bg-white h-28 mx-2 mr-4 space-x-32 ml-6">
                  <div className="flex flex-row">
                    <div className="col3 w-4 h-8 rounded-md" />
                    <b>
                      <h5 className="text-lg tracking-wider pl-2 pr-24">
                        Vue Globale des commandes 
                      </h5>
                    </b>
                  </div>
                  <button className="bg-white hover:bg-gray-50 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl ml-80 w-48 ">
                    <p>Cette Semaine</p>
                    <div className="pb-2 pl-2 ml-2">
                      <svg
                        className="h-5 w-5 inline-block"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.29289 6.29289C3.65338 5.93241 4.22061 5.90468 4.6129 6.2097L4.70711 6.29289L10 11.585L15.2929 6.29289C15.6534 5.93241 16.2206 5.90468 16.6129 6.2097L16.7071 6.29289C17.0676 6.65338 17.0953 7.22061 16.7903 7.6129L16.7071 7.70711L10 14.4142L3.29289 7.70711C2.93241 7.34662 2.90468 6.77939 3.2097 6.3871L3.29289 6.29289Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
                {/* diagramme */}
                <div className="h-2  w-auto ml-8 mr-2 ">
                  <div id="chart_div" className="chart" />
                </div>
              </div>

    )
}
export default OrderGlobalView ;