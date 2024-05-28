import DarkModeSwitcher from './DarkModeSwitcher/DarkModeSwitcher';
import DropdownNotification from './DropDownNotification/DropDownNotification';
import DropdownUser from './DropDownUser/DropDownUser';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <header className=" border  sticky top-0 z-50 h-[10vh] flex w-full bg-[#ffffff] drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          {/* <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              // props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-6 w-6 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white 
                  `}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white '
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white 
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white 
                  }`}
                ></span>
              </span>
            </span>
          </button> */}
          {/* <!-- Hamburger Toggle BTN --> */}

          <div className="block flex-shrink-0 lg:hidden" >
            <img src="logo.svg" alt="Logo" />
          </div>
        </div>

        <div className="hidden sm:block">
          <form action="submit" >
          <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                
                <SearchIcon className='hover:text-blue-600'/>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex  items-center gap-7 2xsm:gap-7">
          <ul className="flex   items-center gap-10 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
