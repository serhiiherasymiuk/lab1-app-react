import React, { useState } from 'react';
import './App.css';

function App() {
    const [selectedPhotos, setSelectedPhotos] = useState([]);

    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        const newPhotos = files.map(file => URL.createObjectURL(file));
        setSelectedPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Add new photos
                </p>
                <input type="file" accept="image/*" multiple onChange={handleFileSelect} /> {/* File input field */}
                <div className="flex-container">
                    {selectedPhotos.map((photo, index) => (
                        <img key={index} src={photo} className="Selected-photo" alt={`Selected Photo ${index + 1}`} />
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
