import { useState } from 'react';

export default function SearchBar({setResult} : {setResult: any}) {
    const [searchText, setSearchTerm] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchTerm(event.target.value);

        let results = []
        
        //check if there is a text in the search bar
        if (searchText == "") {
            //show default results
        }
        else{
            // fetch the search results from openweather api
            console.log("searching for: ", searchText)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${process.env.OPENWEATHER_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setResult(data)
            })
            .catch(error => {
                console.log("Error: ", error)
            })
        }
    }

    return (
            <form onSubmit={handleSearch} className="flex justify-center">
                <input className="font-bold border rounded-full" value={searchText} placeholder="Search your city..." onChange={(e) => setSearchTerm(e.target.value)}/>
            </form>
    )
}