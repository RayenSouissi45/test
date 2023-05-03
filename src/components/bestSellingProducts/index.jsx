import ColoredRectangle from "../coloredRectangle"
import ProductCart from "../productCart"


function BestSellingProducts () {
    return (
        <div className="h-auto ml-6 bg-white  rounded-lg flex-grow pb-8 w-[340px]">
                <div className="flex flex-row items-center space-x-3 py-8 px-2 bg-white h-28 mx-8">
                  <ColoredRectangle color="bg-red-200"/>
                  <b>
                    <h5 className="text-lg ">Les Produits Les Plus Vendues</h5>
                  </b>
                </div>
                <div className="flex flex-row items-center space-x-48 px-8 bg-white mx-1 text-gray-500">
                  <b>produits</b>
                  <b>Gains</b>
                </div>
                <div className="border-b ml-6 mr-6 mt-6 " />
                 <ProductCart name="SVR SUN SECURE CREME SPF 50+" prix="300" state="active"/>
                 <ProductCart name="SVR SUN SECURE CREME SPF 50+" prix="300" state="active"/>
                
                 <ProductCart name="SVR SUN SECURE CREME SPF 50+" prix="300" state="active"/>
                 <ProductCart name="SVR SUN SECURE CREME SPF 50+" prix="300" state="active"/>
                <button className="bg-white w-80 mx-auto hover:bg-gray-50  mt-12 text-gray-800 font-bold py-2 px-4 flex flex-row border rounded-xl">
                  <h2 className="mx-auto">Tous Les Produits</h2>
                </button>
              </div>
    )
}
export default BestSellingProducts