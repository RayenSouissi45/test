function SidebarCart ({children, text}) {
  return (
      <div className="lg:w-52 max-[1024px]:w-[48px] ">
  <a
    href="#"
    className="block px-4 py-2 text-gray-900 font-bold bg-white rounded-md mb-4 hover:bg-gray-400"
  >
    {children}
    <span className="max-[1024px]:hidden">{text}</span>
  </a>
</div>
  )
}
export default SidebarCart ;