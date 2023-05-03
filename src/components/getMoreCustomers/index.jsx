import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/facebookIcon";
import TwitterIcon from "../icons/twitterIcon";

function GetMoreCustomers () {
    return (
        <div className="h-60 bg-white w-[672px] rounded-lg  ml-8 mb-20 ">
                <div className="flex flex-row pl-6 ml-4 mt-8">
                  <div className="col2 w-4 h-8 rounded-md" />
                  <b>
                    <h5 className="text-lg tracking-wider pl-4  ">
                      Get more customers !
                    </h5>
                  </b>
                </div>
                <p className="ml-10 pt-4 mr-4 text-gray-400">
                  50% of new customers explore products because the author sharing
                  the work on the social media
                </p>
                <div className="flex flex-row">
                  <p className="ml-10 text-gray-400">
                    network. Gain your earnings right now !
                  </p>
                  <img
                    className="h-4 mt-1.5"
                    src="https://emojis.wiki/thumbs/emojis/fire.webp"
                  />
                </div>
                <div className="flex flex-row mt-8">
                  <button className="bg-white w-40  hover:bg-gray-100 ml-12 text-gray-800 font-bold  border rounded-xl flex flex-row h-12 pl-4 pt-2">
                  <FacebookIcon/>
                    <h2>Facebook</h2>
                  </button>
                  <button className="bg-white w-40  hover:bg-gray-100 ml-20 text-gray-800 font-bold   border rounded-xl flex flex-row h-12 pl-4 pt-2">
                    <TwitterIcon/>
                    <h2>Twitter</h2>
                  </button>
                  <button className="bg-white w-40  hover:bg-gray-100 ml-20 text-gray-800 font-bold  border rounded-xl flex flex-row h-12 pl-4 pt-2">
                    <InstagramIcon/>
                    <h2>Instagram</h2>
                  </button>
                </div>
              </div>
    )
}
export default GetMoreCustomers ;