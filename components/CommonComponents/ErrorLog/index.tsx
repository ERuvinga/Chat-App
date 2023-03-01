import React, { useContext } from "react";
import { ContextUser } from "../../Context/LogdataContext";

const ErrorLog = () => {
    let errorDatas: any;
    errorDatas = useContext(ContextUser);

    return <span className={(errorDatas.data.stateError) ? "text-[#f00]  ErrorLog" : " HiddenErrorLog"}> # {errorDatas.data.MessageError}</span>
}
export default ErrorLog