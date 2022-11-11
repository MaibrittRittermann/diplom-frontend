import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { savePhotos } from "../services/photoService";

const Upload = (props) => {

    const [Photos, setPhotos] = useState(null);


    const handleChange = e => {
        // let value = Array.prototype.slice.call(e.target.files);
        let value = e.target.files;
        let name = e.target.name;
        setPhotos((prevalue)=> { return { ...prevalue, [name]: value }});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for(let i= 0; i < Photos.length; i++) {
            formData.append('files', Photos[i]);
        }
        formData.append('photographerId', props.user.photographerId);
        formData.append('photographer', props.user.name);

    console.log(formData.get('files'));
        await savePhotos(formData);
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