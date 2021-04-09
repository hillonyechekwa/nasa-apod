import { useState, useEffect } from 'react';
import NavBar from './NavBar'



const apiKey = process.env.REACT_APP_NASA_API_KEY

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null)

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                 `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            )

            const data = await res.json()
            setPhotoData(data)
            console.log(data)
           
        }
    }, [])
    
    if (!photoData) return <div></div>;
    return (
        <>
        <NavBar />
        <div className='nasa-photo'>
            {photoData.media_type === "image" ? (
                <img className="photo" src={photoData.url} alt={photoData.title} />
            ) : (
                <iframe
                    src="{photoData.url}"
                    title="space-video"
                    frameborder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
                </div>
            </div>
            </>
 )   
}