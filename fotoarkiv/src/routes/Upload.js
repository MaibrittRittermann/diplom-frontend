import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const Upload = (props) => {

    const params = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();
    console.log(props.user.photographerId);
        
    }

    return ( <React.Fragment>
            <h1 className="text-center mt-5">Upload billeder</h1>
            <Form className="container text-center" onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Vælg billeder til upload:</Form.Label>
                    <Form.Control type="file" multiple accept="image/png, image/jpeg" />.
                    <Form.Control type="hidden" name="photographerName" value={props.user.name}/>
                    <Form.Control type="hidden" name="photographerId" value={props.user.photographerId}/>
                    <Button variant='primary' type="submit" >Upload billeder</Button>
                </Form.Group>   
            </Form>
        </React.Fragment> );
}
 
export default Upload;