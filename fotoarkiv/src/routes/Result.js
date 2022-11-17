import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import {getPhotoByLabel} from "../services/photoService";
import { useNavigate } from "react-router-dom";

const Result = () => {

    let [Photos, setPhotos] = useState([]);
    let label = useParams().search;
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        if (label)
        await getPhotoByLabel(label)
            .then((res) => { 
                setPhotos(res.data); })
            .catch((err)=>console.log(err));  // TODO: Log errors and make nice error message
    }

    return ( 
    <Container className='mt-5'>
        <h1>Fundne Fotos af {label}:</h1>
        <div className="row justify-content-around">

            { Photos.map((photo, key) => 
                <Card className="m-1" style={{ width: '18rem' }} key={key}>
                <Card.Img className="mt-2" src={photo.url} alt={label}/>
                <Card.Body>
                <hr/>
                <Card.Text>
                    Dato: {new Date(photo.date).toLocaleDateString('da-DK')} <br/>
                    <span className="small">Fotograf : {photo.photographer} </span><br/>
                    {photo.labels.map((l, i) =>
                        <span className="small" key={i}>#{l} </span>      
                    )}
                </Card.Text>
                <Button variant="primary" onClick={() => {return navigate('/download', {state: {photo: photo}})}}>Hent foto</Button>
                </Card.Body>
                </Card>
            )}
        
        </div>
    </Container> );
}
 
export default Result;