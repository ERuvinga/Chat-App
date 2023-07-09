import React, { useContext } from "react";
import { ContextUser } from "../../Context/LogdataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const ErrorLog = () => {
    let errorDatas: any;
    errorDatas = useContext(ContextUser);
    if(errorDatas.data.stateError){ // no display error message after some secondes
        setTimeout(()=>{
            errorDatas.setData(
                { 
                    stateError: false, 
                    MessageError: errorDatas.data.MessageError
                });
        }, 15000);
    }

    return( 
        <div className={(errorDatas.data.stateError) ? "ErrorLog flex space-x-1": " hiddenErrorLog"}>
            <FontAwesomeIcon icon={faCircleInfo} className="text-[#8186A0]"/>
            <span className= "ErrorMsg text-[#E2E3E9] " > 
                # {errorDatas.data.MessageError}
            </span>
        </div>
    )
}
export default ErrorLog