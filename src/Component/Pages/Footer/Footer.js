import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="font-poppins-font bg-slate-900 text-white py-10">
        <div className="container mx-auto  grid md:grid-rows-12 md:grid-flow-col px-4 gap-4 ">
          <div className="md:col-start-1 md:col-end-3">
            <img
              className="w-56"
              src="https://i.ibb.co/tL8bNyL/images-removebg-preview.png"
              alt=""
            />
            <h3>
              volutpat cubilia suscipit senectus congue consequat,
              <br />
              ad habitant maecenas libero hendrerit porttitor.
              <br /> Tempor cursus nisl imperdiet porta in
            </h3>
          </div>
          <div className="">
            <h3 className="text-2xl font-medium">Explore</h3>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">About Us</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Service</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Doctors</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">FAQ</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Appointment</h4>
          </div>
          <div>
            <h3 className="text-2xl font-medium">Service</h3>
            <h3 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Birthing Care</h3>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Heart Care</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Emergencies</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Family medicine</h4>
            <h4 className="mt-3 hover:text-indigo-500 hover:cursor-pointer">Cancer Care</h4>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium">Subscribe</h3>
            <h3 className="my-3">Stay in the know with news and promotions</h3>
            <input class="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Email"/>
                <br/>
            <input class="shadow appearance-none  mt-4 rounded w-72 py-2 px-3 bg-sky-500 hover:bg-sky-600 text-white leading-tight focus:outline-none focus:shadow-outline hover:cursor-pointer"  type="submit" value="Sign Up"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
