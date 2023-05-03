function LightDark () {
    return (
        <div className=" h-40 w-auto ">
    <div className="border-b ml-1 mr-1 mt-2 mb-1" />
    <div className="flex flex-row">
      <svg
        className="h-5 mt-4 ml-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        />
      </svg>
      <p className="mt-4 ml-2 text-xs">help getting started</p>
      <button className="bg-purple-300 hover:bg-purple-500 w-6 h-6 rounded-md mt-3 ml-8">
        <p>8</p>
      </button>
    </div>
    <div className="w-52 mt-4 bg-gray-200 rounded-3xl h-10 flex flex-row">
      <button>
        <div className="w-24 bg-white rounded-3xl h-8 ml-1 flex flex-row shadow-xl hover:bg-gray-400">
          <svg
            className="w-4 ml-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          <p className="pl-1 pt-0.5">Light</p>
        </div>
      </button>
      <div className="w-24 bg-gray-200 rounded-3xl h-8 mt-1 ml-1 flex flex-row ">
        <svg
          className="w-4 ml-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
        <p className="pl-1  pt-0.5">Dark</p>
      </div>
    </div>
  </div>
    )
}
export default LightDark