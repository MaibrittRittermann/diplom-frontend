import React from "react";

const Result = () => {

    const handleChange = e => {
        console.log(e);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }


    return ( <React.Fragment>
        <h1>Fundne Fotos</h1>
        
    </React.Fragment> );
}
 
export default Result;