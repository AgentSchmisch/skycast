import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({setResult} : {setResult: any}) {
    const [searchText, setSearchTerm] = useState<string>("");
    const router = useRouter()


    const handleSearch = (event: any) => {
        event.preventDefault();
        setSearchTerm(event.target.value);

        
        //check if there is a text in the search bar
        if (searchText == "") {
            //show default results
        }

        else{
            //redirect to the search result page
            router.push(`/cities/${encodeURIComponent(searchText)}`)
        }
    }

    return (
            <form onSubmit={handleSearch} className="flex justify-center">
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <input 
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500" 
                    value={searchText ?? ""} 
                    placeholder="Search your city..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
                        </form>
    )
}