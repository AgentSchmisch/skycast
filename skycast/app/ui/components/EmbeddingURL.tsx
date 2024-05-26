import React, {useEffect, useState } from "react";
export default function EmbeddingURL() {
    const [url, setUrl] = useState("");
    const [copySuccess, setCopySuccess] = useState("");

    useEffect(() => {
        const port = window.location.port || 3000;
        const storedLikedCities = localStorage.getItem('likedCities');
        if (storedLikedCities) {
            const likedCities = JSON.parse(storedLikedCities);
            let encodedCities = encodeURIComponent(JSON.stringify(likedCities));
             setUrl(`http://localhost:${port}/fav?likedCities=${encodedCities}`);
        }


    }, []);

    const handleCopyClick = () => {
        if (url) {
            navigator.clipboard.writeText(url)
                .then(() => {
                    setCopySuccess("URL successfully copied!");
                    setTimeout(() => setCopySuccess(""), 5000);
                })
                .catch((err) => {
                    setCopySuccess("Failed to copy URL");
                    setTimeout(() => setCopySuccess(""), 5000);
                });
        }
    };

    return (
        <div className="relative flex items-center justify-end">
            {copySuccess && (
                <div className=" mr-5 text-green-500">{copySuccess}</div>
            )}
            <button onClick={handleCopyClick} className="mt-2 mr-10 p-2 bg-blue-500 text-white rounded">
                Copy URL
            </button>
        </div>
    );

}

