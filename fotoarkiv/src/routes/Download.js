import React, { useState } from 'react';
import { Form, Card, Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { downloadPhoto } from '../services/photoService';

const Download = (props) => {

    const location = useLocation();
    const photo = location.state.photo;

    const [Data, setData] = useState({
        channel: '',
        media: 'Avis',
        date: '',
    });

    const handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;
        setData((prevalue)=> { return { ...prevalue, [name]: value }});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', photo.name);
        formData.append('photographerId', photo.photographerId);
        formData.append('userId', props.user.photographerId);
        formData.append('channel', Data.channel);
        formData.append('mediaType', Data.media);
        formData.append('date', Data.date);

        await downloadPhoto(formData);
    }
    return ( 
        <Container>
            <Form onSubmit={handleSubmit}>
                <Card className="m-1 p-3">
                    <Card.Img className="mt-2" src={photo.url} alt={photo.name}/>
                    <Card.Body>
                        <Card.Text>
                            <Form.Label>Hvilket medie skal billedet vises på: </Form.Label>
                            <select name="media" onChange={handleChange}>
                                <option value={'Avis'}>Avis</option>
                                <option value={'Ugeavis'}>Ugeavis</option>
                                <option value={'Webside'}>Webside</option>
                            </select>
                            <br/>
                            <Form.Label>Kanal: </Form.Label>
                            <Form.Control type='text' name='channel' value={Data.channel} placeholder={`Hvilken ${Data.media} skal billedet vises på/i?`} onChange={handleChange}/>
                            <br/>
                            <Form.Label>Dato: </Form.Label>
                            <Form.Control type='date' name='date' value={Data.date} onChange={handleChange}/>                                                
                        </Card.Text>
                        <Button variant="primary" type="submit">Download foto</Button>
                    </Card.Body>
                </Card>
            </Form>
        </Container>
     );
}
 
export default Download;