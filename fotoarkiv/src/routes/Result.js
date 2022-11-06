import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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
        <h1>Fundne Fotos:</h1>

        { Photos.map((photo, key) => {
            <div className='card' key={key}>
                <img src={photo} alt={label}/>
                <p>{photo}</p>
                {console.log("test " + key)}
            </div> 

           
        })}
        
    </Container> );
}
 
export default Result;