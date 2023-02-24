import React, { useState, useContext } from "react";
import { ErrorLogContext } from "../../Context/LogdataContext";

const ErrorLog = () => {
    let errorDatas: any;
    errorDatas = useContext(ErrorLogContext);
    if (!errorDatas) {
        return null
    }
    console.log(errorDatas);
    return <div className={(errorDatas.data.stateError) ? "text-[#f00] text-left max-w-[50%] ErrorLog" : "text-[#f00] text-left w-[50%] HiddenErrorLog"}> # {errorDatas.data.MessageError}</div>
}
export default ErrorLog