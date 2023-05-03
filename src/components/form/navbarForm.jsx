import InputFIcon from "../icons/inputFIcon"
import NavbarFormIcon from "../icons/navbarFormIcon"

function NavbarForm({placeholderText, width}) {
  return (
    <form className="relative flex items-center border-2 bg-gray-100 rounded-md border-black">
      <NavbarFormIcon/>
      <input
        type="text"
        className={` ${width} pl-10 pr-20 py-2 rounded-md border-none focus:outline-none bg-gray-100 `}
        placeholder={placeholderText} 
      />
      <div className="mr-4">
        <button>
        <InputFIcon/>
        </button>
        
      </div>
    </form>
  )
}

export default NavbarForm
