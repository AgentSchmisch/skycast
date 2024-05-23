import React, {useEffect, useState} from "react";
export default function EmbeddingURL() {
    const [url, setUrl] = useState("");
    useEffect(() => {
        const port = window.location.port || 3000;
        const storedLikedCities = localStorage.getItem('likedCities');
        if (storedLikedCities) {
            const likedCities = JSON.parse(storedLikedCities);
            let encodedCities = encodeURIComponent(JSON.stringify(likedCities));
             setUrl(`http://localhost:${port}/fav?likedCities=${encodedCities}`);
        }


    }, [url]);

    function handleButtonClick() {
        console.log("Liked Cities from URL:", url);

    }

        return (
            <div className="relative">
                <input type="text" name="output" placeholder={"URL"}></input>
                <button className="absolute top-0 right-0 mt-4 mr-4 md:h-6 text-white bg-blue-500 p-2 rounded" onClick={handleButtonClick}>
                    Click to create URL
                </button>
            </div>
);

}

