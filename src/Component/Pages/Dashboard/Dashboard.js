import React, { useState } from 'react';

import 'react-pro-sidebar/dist/css/styles.css';


import "./Dashboard.css"

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  
    return (
        <div>
         {sidebar &&  <button onClick={showSidebar} >show</button>}
       <div class="" className={sidebar ? "hidden w-60 h-full shadow-md bg-red-500  fixed":"w-60 h-full shadow-md bg-red-500  fixed"}>
  <ul class="relative">
    <li class="relative  ">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
        <button className="mx-12" onClick={showSidebar}>X</button>
        <span>Sidenav link 3</span>
      </a>
    </li>
  </ul>
</div>
         </div>
    );
};

export default Dashboard;