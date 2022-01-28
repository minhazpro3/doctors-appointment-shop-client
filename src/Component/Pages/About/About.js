import React from 'react';

const About = () => {
    return (
        <div className="xs:mx-4 container mx-auto mb-24">
            <div className=" grid gap-x-8 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <div className="px-4">
                    <img src="https://i.ibb.co/Q8LQFCc/female-doctor-checking-blood-pressure-of-senior-ma-PDN3-YZZ-owvsk3h41ynx8a01d96lxdo3tk4zqd9hqw2brnpp.jpg" alt="" />
                </div>
                <div className="px-4 font-poppins-font">

                    <h6 className="text-1xl font-semibold opacity-50"> ABOUT US</h6>
                    <h4 className="text-4xl font-bold text-blue-900	my-3">We Provide Best Health Care for Your Family</h4>

                    <p className="opacity-50  my-5">Lorem ipsum dolor sit amet consectetur adipiscing elit, volutpat cubilia suscipit senectus congue consequat, ad habitant maecenas libero hendrerit porttitor. Tempor cursus nisl imperdiet porta in</p>

                    <div className="grid sm:gird-cols-1 md:grid-cols-2 my-4 ">
                        <div>
                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> Confortable care</p>
                            </ul>

                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> High quality care</p>
                            </ul>

                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> Friendly staff</p>
                            </ul>


                        </div>
                        <div className="">

                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> Trusted specialist doctor</p>
                            </ul>

                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> Advanced services</p>
                            </ul>

                            <ul className="flex items-center gap-1">
                                <i className="far fa-check-circle text-sky-600	 "></i> <p className="opacity-50 text-sm"> 24/7 Open Support</p>
                            </ul>


                        </div>
                    </div>
                    <button className="rounded-md bg-sky-500 text-white text-sm py-2 px-3 hover:bg-sky-400  font-poppins-font 	 ">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default About;