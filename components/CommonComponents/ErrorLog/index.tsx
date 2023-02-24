import React, { useState, useEffect } from "react";

interface ErrorContent {
    data: String,
    source: String,
    statePage: boolean
}

const ErrorLog = (dataError: ErrorContent) => {
    return <div className={dataError.statePage ? "text-[#f00] text-left max-w-[50%] ErrorLog" : "text-[#f00] text-left w-[50%] HiddenErrorLog"}> #{dataError.data}</div>
}
export default ErrorLog