function GlobalViewCommercialCart({text, children}) {
    return (
        <div className="flex flex-col">
                <div className="flex-row w-20 h-20 rounded-full mr-12 ml-12">
                  {children}
                </div>
                <p className="pl-12 pt-2">{text}</p>
              </div>
    )
}
export default GlobalViewCommercialCart ;