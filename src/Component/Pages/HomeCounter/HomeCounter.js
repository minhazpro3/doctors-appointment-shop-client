import React from 'react';
import CountUp from 'react-countup';


const HomeCounter = () => {

    // var Counter = require('react-counter');


    return (
        <div className="font-poppins-font  container  mx-auto static ">

            <div className="py-24  bg-white relative bottom-32 drop-shadow-2xl  ">
                <div className="grid  md:grid-cols-4 sm:grid-cols-1   gap-y-8	 justify-items-center ">
                    <div className="grid justify-items-center">
                        <CountUp className="text-blue-500 font-bold text-3xl" end={1200} duration={3} suffix="+" />
                        <h4 className="text-sm opacity-75">HAPPY PATIENTS</h4>
                    </div>
                    <div className="grid justify-items-center">
                        <CountUp className="text-blue-500 font-bold text-3xl" end={200} duration={3} />
                        <h4 className="text-sm opacity-75">SPECIALIST DOCTORS</h4>
                    </div>
                    <div className="grid justify-items-center">
                        <CountUp className="text-blue-500 font-bold text-3xl" end={45} duration={3} />
                        <h4 className="text-sm opacity-75">YEARS EXPERIENCE</h4>
                    </div>
                    <div className="grid justify-items-center">
                        <CountUp className="text-blue-500 font-bold text-3xl" end={220} duration={3} suffix="+" />
                        <h4 className="text-sm opacity-75">PROBLEM SOLVE</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeCounter;