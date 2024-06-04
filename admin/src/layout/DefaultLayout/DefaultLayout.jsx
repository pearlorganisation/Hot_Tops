// ----------------------------------States--------------------------------------

import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";

// --------------------------------------------------------------------------------

const DefaultLayout = () => {
  return (
    <div>
      <div className="flex ">
        <div className={`visible w-72 lg:block`}>
          <Sidebar />
        </div>
        <div className="flex-1  lg:h-[80px]  ">
          <Header />
          <Main />
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
};

export default DefaultLayout;
