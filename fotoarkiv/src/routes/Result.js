import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import {getPhotoByLabel} from "../services/photoService";

const Result = () => {

    let [Photos, setPhotos] = useState([]);
    let label = useParams().search;

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
        <h1>Fundne Fotos omkring {label}:</h1>
        <div className="row justify-content-around">

        { Photos.map((photo, key) => 

            <Card className="m-1" style={{ width: '18rem' }} key={key}>
            <Card.Img className="mt-2" src={photo.url} alt={label}/>
            <Card.Body>
            <hr/>
            <Card.Text>
                Fotograf : {photo.photographer}
            </Card.Text>
            <Button variant="primary">Hent foto</Button>
            </Card.Body>
            </Card>
        )}
        
        </div>
    </Container> );
}
 
export default Result;