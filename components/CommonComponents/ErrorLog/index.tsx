import React, { useState, useEffect } from "react";

interface ErrorContent {
    data: String,
    source: String
}

const ErrorLog = (dataError: ErrorContent) => {
    const [Error, setError] = useState("");
    return <div className="text-[#f00] text-center w-[90%] ErrorLog "> #{dataError.data}</div>
}
export default ErrorLog