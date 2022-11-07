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
        <h1>Fundne Fotos omkring {label}:</h1>
        <div className="row">



        { Photos.map((photo, key) => 
            <div className='col-12 col-md-6 col-xl-3 m-1' key={key}>
                <img className="img-fluid" src={photo} alt={label}/>
            </div> 
        )}
        
        </div>
    </Container> );
}
 
export default Result;