import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { savePhotos } from "../services/photoService";

const Upload = (props) => {

    const [Photos, setPhotos] = useState({
        files: [],
        photographerId: props.user.photographerId,
        photographer: props.user.name
    });

    const handleChange = e => {
        let value = Array.prototype.slice.call(e.target.files);
        let name = e.target.name;
        setPhotos((prevalue)=> { return { ...prevalue, [name]: value }});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await savePhotos(Photos);
    }

    return ( <React.Fragment>
            <h1 className="text-center mt-5">Upload billeder</h1>
            <Form className="container text-center" onSubmit={handleSubmit}>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Vælg billeder til upload:</Form.Label>
                    <Form.Control type="file" name="files" multiple accept="image/png, image/jpeg" onChange={handleChange} />.
                    <Button variant='primary' type="submit" >Upload billeder</Button>
                </Form.Group>   
            </Form>
        </React.Fragment> );
}
 
export default Upload;