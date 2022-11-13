import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Train = () => {

    const [ labels, setLabels ] = useState([
        {
            fileName: '',
            labels: []
        }
    ]);
    
    const handleChange = e => {
        let value = e.target.files;
        let name = e.target.name;
        setLabels((prevalue)=> { return { ...prevalue, [name]: value }});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(labels);
    }

    return ( <Form className="container text-center" onSubmit={handleSubmit}>
        <h1 className="text-center mt-5">Tildel labels til billeder</h1>
            


    </Form> );
}
 
export default Train;