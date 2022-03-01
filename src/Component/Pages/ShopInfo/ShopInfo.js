import React from 'react';

const ShopInfo = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className=" ">
                <div className=" flex   justify-between items-center border-2">
                    <div className="bg-sky-400  px-2 sm:px-8 md:px-12 lg:px-24">
                        <h4>SL</h4>
                        <h4>User</h4>
                    </div >
                    <div className="bg-emerald-400  px-2 sm:px-8 md:px-12 lg:px-24">
                        <h4>pro pic</h4>
                        <h4>pro name</h4>
                    </div>
                    <div className="bg-amber-500  px-2 sm:px-8 md:px-12 lg:px-24">
                        <h4>pro pic</h4>
                        <h4>pro name</h4>
                    </div>
                    <div className="bg-red-500  px-2 sm:px-8 md:px-12 lg:px-24">
                        <h4>Date</h4>
                        <h4>District</h4>
                    </div>
                    <div className="bg-violet-500  px-2 sm:px-8 md:px-12 lg:px-24">
                        <h4>Status</h4>
                        <h4>Delete</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ShopInfo;