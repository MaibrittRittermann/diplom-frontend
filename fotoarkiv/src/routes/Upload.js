import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { savePhotos } from "../services/photoService";
import { useNavigate } from "react-router-dom";

const Upload = (props) => {

    const [Photos, setPhotos] = useState(null);
    const navigate = useNavigate();


    const handleChange = e => {
        let value = e.target.files;
        let name = e.target.name;
        setPhotos((prevalue)=> { return { ...prevalue, [name]: value }});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("Title", "Dette er en test");

        Array.from(Photos.files).forEach(photo => {
            formData.append('files', photo);
        });

        formData.append('photographerId', props.user.photographerId);
        formData.append('photographer', props.user.name);

        savePhotos(formData).then((res) => {
            navigate('/train', {state: {predictions: res.data}});
        });
    }

    return (
            <Form className="container text-center" onSubmit={handleSubmit} encType="multipart/form-data">
                <h1 className="text-center mt-5">Upload billeder</h1>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Vælg billeder til upload:</Form.Label>
                    <Form.Control type="file" name="files" multiple accept="image/png, image/jpeg, image/jpg" onChange={handleChange} />.
                    <Button variant='primary' type="submit" >Upload billeder</Button>
                </Form.Group>   
            </Form>
     );
}
 
export default Upload;