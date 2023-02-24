import React, { useState, useContext } from "react";
import { ErrorLogContext } from "../../Context/LogdataContext";

const ErrorLog = () => {
    let errorDatas: any;
    errorDatas = useContext(ErrorLogContext);

    return <span className={(errorDatas.data.stateError) ? "text-[#f00]  ErrorLog" : " HiddenErrorLog"}> # {errorDatas.data.MessageError}</span>
}
export default ErrorLog