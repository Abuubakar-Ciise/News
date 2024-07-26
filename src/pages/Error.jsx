import React, { useEffect } from "react";
import './Error.css'

const Error = ({ message }) => {

    useEffect(() => {
        alert("The API is unable to display news while the project is hosted online. Please download the project to view the news content. Thank you.");
    }, []);

    return (
        <div className="container">
            <div className="error">
                <h1>Error</h1>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Error;
