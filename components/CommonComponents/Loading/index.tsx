import React from "react";
import LoadingComponent from '../LoadinComponent';

const loading = () => {
    return (
        <>
            <div className=" flex flex-col justify-center space-y-5 mx-auto w-[95%] md:w-[60%] lg:w-[40%] h-screen ">
                <div className="">
                    <LoadingComponent />
                </div>
                <p className="h-[25px] px-2 mx-auto text-[.85em] md:text-[1em] text-[#5843E4] text-center"> Wait ...</p>
            </div>
        </>
    )

}

export default loading