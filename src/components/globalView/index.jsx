import SimpleButton from "../button/simpleButton"
import Decrease from "../decrease/decrease"
import GlobalViewCommercialCart from "../globalViewCommercialCart/globalViewCommercialCart"
import DownIcon from "../icons/DownIcon"
import InformationIcon from "../icons/InformationIcon"
import HeartBeatIcon from "../icons/heartBeatIcon"
import RedDownIcon from "../icons/redDownIcon"
import SeeEveryThing from "../icons/seeEveryThing"
import ShopIcon from "../icons/shopIcon"
import UpGreenIcon from "../icons/upGreenIcon"
import Increase from "../increase/increase"



function GlobalView () { 
  return (<div className="h-20 bg-white rounded-lg flex-grow ml-8 pb-8 mb-6 w-[672px]">
                <div className="flex flex-row items-center py-8 px-2 bg-white h-28 mx-2 mr-4 space-x-72 ml-6">
                  <div className="flex flex-row">
                   <div className="col1 w-4 h-8 rounded-md" />
                <b>
                  <h5 className="text-lg tracking-wider pl-2 pr-24">
                    Vue Globale
                  </h5>
                </b>
              </div>
              <SimpleButton text='Cette semaine'>
                <DownIcon/>
              </SimpleButton>
            </div>
            <div className="bg-gray-100 ml-4 mr-4 rounded-2xl p-4 h-40 flex flex-row">
              <div className="bg-white w-84 h-32 rounded-2xl shadow-lg flex items-center ">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center ml-4">
                  {/* shop icon */}
                  <ShopIcon/>
                </div>
                <div className="ml-4">
                  <div className="flex flex-row">
                    <div className="text-sm font-semibold text-gray-800">
                      Nombre des personnes
                    </div>
                    {/* information icon */}
                    <InformationIcon/>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">1024</div>
                </div>
                <Decrease percentNumber='1.8' />
              </div>
              {/* ---------------------------------------------------------------------------- */}
              <div className=" w-84 h-32 rounded-2xl  flex items-center ml-8">
                <div className="w-12 h-12 rounded-full bg-purple-300 flex items-center justify-center ml-4">
                  {/* heart beat icon */}
                  <HeartBeatIcon/>
                </div>
                <div className="ml-4">
                  <div className="flex flex-row">
                    <div className="text-sm font-semibold text-gray-800">
                      Nombre des Commandes
                    </div>
                    {/* information icon */}
                    <InformationIcon/>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">256</div>
                </div>
                <Increase percentNumber="37.8" />
              </div>
            </div>
            <div className="ml-8 mt-8  flex flex-row">
              <p>
                Vous avez <b>57 télé-commercial</b>
              </p>
              <img
                className="h-3 mt-2 ml-1"
                src="https://upload.wikimedia.org/wikipedia/commons/8/83/Noto_Emoji_Pie_1f60e.svg"
              />
              <button className="bg-white hover:bg-gray-50 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl ml-72 ">
                <h2 className="pl-1 pb-2 pt-1">Envoyer un message</h2>
              </button>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            <div className="flex flex-row p-8 mt-6">
              <GlobalViewCommercialCart text="Amina Hazem">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Wafa Masmoudi">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Amira Aribi">
              <img
                    className="w-20 h-20 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
              </GlobalViewCommercialCart>
              <GlobalViewCommercialCart text="Voir tous">
                <SeeEveryThing/>
              </GlobalViewCommercialCart>
            </div>
          </div> ) }
          export default GlobalView