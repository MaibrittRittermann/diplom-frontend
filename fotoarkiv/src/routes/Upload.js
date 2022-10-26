import React from "react";
import { Form, Button } from 'react-bootstrap';

const Upload = () => {



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit');
    }



    return ( <React.Fragment>
            <h1 className="text-center mt-5">Upload billeder</h1>
            <Form className="container text-center" onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Vælg billeder til upload:</Form.Label>
                    <Form.Control type="file" />
                    <Button variant='primary' type="submit" >Upload billeder</Button>
                </Form.Group>   
            </Form>
        </React.Fragment> );
}
 
export default Upload;