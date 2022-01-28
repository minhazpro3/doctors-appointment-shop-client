import React from 'react';

const Services = () => {
    return (
        <div className="bg-sky-100	 py-8">
            <div className="text-center my-8">
                <p className="text-1xl font-semibold opacity-50">SERVICES</p>
                <h3 className="text-4xl font-bold text-blue-900">Our Speciality
                </h3>
            </div>
            <div className="my-16">
                <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img className="" style={{ height: '80px' }} src='../../Icons/mobile-clinic-truck.svg' alt="icon of category" />
                            <h3 className="text-2xl">Birthing Care</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img style={{ height: '80px' }} src="https://i.ibb.co/N2pNvXp/health-insurance.png" alt="icon of category" />
                            <h3 className="text-2xl">Heart Care</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img style={{ height: '80px' }} src="https://i.ibb.co/s27NLmx/mobile-clinic-truck.png" alt="icon of category" />
                            <h3 className="text-2xl">Emergencies</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img style={{ height: '80px' }} src="https://i.ibb.co/s27NLmx/mobile-clinic-truck.png" alt="icon of category" />
                            <h3 className="text-2xl">Family Medicine</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img style={{ height: '80px' }} src="https://i.ibb.co/s27NLmx/mobile-clinic-truck.png" alt="icon of category" />
                            <h3 className="text-2xl">Cancer Care</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                    <div className="group block max-w-xs mx-auto rounded-lg p-6 bg-whitering-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:text-white font-poppins-font border bg-white">

                        <div className="grid justify-items-center ">
                            <img style={{ height: '80px' }} src="https://i.ibb.co/s27NLmx/mobile-clinic-truck.png" alt="icon of category" />
                            <h3 className="text-2xl">Orthopedics</h3>
                            <h5 className=" opacity-50">Click edit to change this text. Lorem ipsum dolor sit amet, </h5>
                        </div>

                    </div>
                </div>
            </div>
          <div className=" flex justify-center my-32">
          <button className="rounded-md bg-sky-500 text-white text-sm py-2 px-3 hover:bg-sky-400 font-poppins-font ">View All Service</button>
          </div>
        </div>
    );
};

export default Services;