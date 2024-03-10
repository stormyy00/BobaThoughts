"use client"
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import getImages from "@/firebase/firestore/getImages";


const Gallery = () => {

const [images, setImages] = useState([]);

useEffect(() => {
    const fetchImages = async () => {
    const imagesData = await getImages();
    setImages(imagesData);
    };

    fetchImages();
}, []);

return (
    <div>
        <Header/>
        <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4 mt-6">image gallery</h1>
        <div className="flex flex-wrap mx-4 mt-6">
            {images.map((image, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={image.url} alt={image.name} className="w-full h-auto" />
                    <div className="p-4">
                    <p className="text-lg font-semibold mb-2">{image.name}</p>
                    </div>
                </div>
                </a>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

export default Gallery;
