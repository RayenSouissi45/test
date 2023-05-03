import CreateButton from "../button/CreateButton";
import NavbarForm from "../form/navbarForm";
import MessageIcon from "../icons/messageIcon";
import NotificationIcon from "../icons/notificationIcon";

function Navbar () {
    return (
        <div className="flex flex-row items-center justify-between py-8 px-8 bg-white h-28 mx-1 fixed top-0  z-50 w-screen">
            <div className="w-96 mr-2  ">
              <NavbarForm placeholderText={"Rechercher un Produit ..."} width='w-[360px]'/>
            </div>
            <div className="flex items-center space-x-10 mr-[260px] ">
              <CreateButton text="+ Create"/>
              <button>
                <MessageIcon/>
              </button>
              <button>
                <NotificationIcon/>
              </button>
              
                <button
                  type="button"
                  className="flex rounded-full focus:ring-4 focus:ring-gray-200"
                  aria-expanded="false"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://xsgames.co/randomusers/assets/avatars/male/74.jpg"
                  />
                </button>
              
            </div>
          </div>
    )
}
export default Navbar ;