function ProductCart ({name,prix,state}) {
    return (
        <div className="flex flex-row mt-8 ml-6">
                  {/* first product image */}
                  <img
                    className="mt-4 mr-4 w-16 h-16 rounded-full"
                    src="https://parapharmacie.tn/wp-content/uploads/2020/12/svr-sun-secure-creme-spf-50.jpg"
                  />
                  <b className="pt-4">{name}</b>
                   <div className="flex flex-col pt-2 pr-6 pl-6 text-gray-500">
                    <b>{prix} DT</b>
                    <div className="bg-green-100 w-24 h-8 rounded-md text-green-400">
                      <p className=" mt-1 ml-2 pl-4">{state}</p>
                    </div>
                  </div>
                </div>
    )
}
export default ProductCart ;