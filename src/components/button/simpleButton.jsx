function SimpleButton ({text,children}) {
    return (
      <button className="bg-white hover:bg-gray-50 text-gray-500 font-bold  px-4 flex flex-row border rounded-xl ml-80  ">
      <p>{text}</p>
      <div className="pb-2 pl-2 ml-2">
      {children}
      </div>
    </button>
    )
}
export default SimpleButton