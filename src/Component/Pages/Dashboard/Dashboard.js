import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "./Dashboard.css";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user, admin } = useAuth();
  console.log(admin,"admin and ", user,"user");
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className=" ">
      <div className="flex">
        <div className="font-poppins-font">
          {sidebar && (
            <button onClick={showSidebar}>
              <img
                className="w-8 fixed "
                src="https://i.ibb.co/2K4cfzC/menu.png"
                alt="menu-bar"
              />
            </button>
          )}
          <div
            className={
              sidebar
                ? "hidden w-60 h-full shadow-md bg-white fixed"
                : "w-60 h-full shadow-md bg-white  fixed"
            }
          >
            <ul className="relative">
              <li className="relative  ">
                <div className="flex justify-between items-center  px-2 my-4">
                  <NavLink to="/">
                    <img
                      className="w-14 rounded-full ml-2 md:m-0 lg:m-0 "
                      src="https://kit.pndrnt.com/medific/wp-content/uploads/sites/5/2020/10/collage-of-a-diverse-group-of-laughing-entrepreneu-KMF3QCG_b.jpg"
                      alt="user"
                    />
                  </NavLink>
                  <h4 className="text-base">
                    {user?.displayName}
                  </h4>
                  <button className="mx-12" onClick={showSidebar}>
                    <img
                      className="w-5  fixed"
                      src="https://i.ibb.co/MGckbMF/x.png"
                      alt="cross menu"
                    />
                  </button>
                </div>
              </li>

             {!admin==="admin" || admin ==="" ? <div>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/">
                        <h4 className="text-base bg-indigo-900 text-white py-1 px-3 rounded-lg">
                          Your Bookings
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                 <li className="relative  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/shopInfo">
                        <h4 className="text-base bg-indigo-900 w-full text-white py-1 px-3 rounded-lg">
                          Shops{" "}
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                </div>
            : <div>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/addProducts">
                        <h4 className="text-base bg-indigo-900 w-full text-white py-1 px-3 rounded-lg">
                          {" "}
                          Add A New Products{" "}
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/addDoctors">
                        <h4 className="text-base bg-indigo-900 text-white py-1 px-3 rounded-lg">
                          Add A New Doctor
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/makeAdmin">
                        <h4 className="text-base bg-indigo-900 w-full text-white py-1 px-3 rounded-lg">
                          Add A New Admin
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/allBookings">
                        <h4 className="text-base bg-indigo-900 w-full text-white py-1 px-3 rounded-lg">
                          All Bookings
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                  <li className="relative my-3  ">
                    <div className="flex justify-between px-4">
                      <NavLink to="/dashboard/allProducts">
                        <h4 className="text-base bg-indigo-900 w-full text-white py-1 px-3 rounded-lg">
                          All Products
                        </h4>
                      </NavLink>
                    </div>
                  </li>
                </div>}
              
            </ul>
          </div>
        </div>
        <div className=" w-full">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
