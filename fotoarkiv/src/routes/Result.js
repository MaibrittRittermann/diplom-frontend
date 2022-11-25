import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import {getPhotoByLabel, getPhoto} from "../services/photoService";
import { useNavigate } from "react-router-dom";

const Result = () => {

    let [Photos, setPhotos] = useState([]);
    let label = useParams().search;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (label) {
    
                let {data} = await getPhotoByLabel(label);
    
                await Promise.all(data.map( async (photo, i) => {
    
                    let p = await getPhoto(photo.name);
                    let url = URL.createObjectURL(p.data);
    
                    data[i].urlLocal = url;
                }));
                
                setPhotos(data); 
            }
        }
        fetchData();
    },[]);

    return ( 
    <Container className='mt-5'>
        {(Photos.length>0)&&<h1>Fundne Fotos af {label}:</h1>}
        {(Photos.length===0)&&<h1>Der findes ingen billeder om {label} i arkivet.</h1>}
        <div className="row justify-content-around">

            { Photos.map((photo, key) => 
                <Card className="m-1" style={{ width: '18rem' }} key={key}>
                <Card.Img className="mt-2" src={photo.urlLocal} onLoad={() => URL.revokeObjectURL(photo.urlLocal)} alt={label}/>
                <Card.Body>
                <hr/>
                <Card.Text>
                    Dato: {new Date(photo.date).toLocaleDateString('da-DK')} <br/>
                    <span className="small">Fotograf : {photo.photographer} </span><br/>
                    {photo.labels.map((l, i) =>
                        <span className="small" key={i}>#{l} </span>      
                    )}
                </Card.Text>
                <Button variant="primary" name="download" onClick={() => {return navigate('/download', {state: {photo: photo}})}}>Hent foto</Button>
                </Card.Body>
                </Card>
            )}
        
        </div>
    </Container> );
}
 
export default Result;