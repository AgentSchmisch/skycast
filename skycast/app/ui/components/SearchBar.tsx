import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ setResult, cities }: { setResult: any; cities: string[] }) {
    const [searchText, setSearchTerm] = useState<string>("");
    const [cityNotFound, setCityNotFound] = useState<boolean>(false);
    const router = useRouter();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSearchTerm(event.currentTarget.value);

        const searchTextLower = searchText.toLowerCase();

        // Check if there is text in the search bar
        if (searchText === "") {
            // Show default results
        } else if (cities.map(city => city.toLowerCase()).includes(searchTextLower)) {
            // Redirect to the search result page
            router.push(`/cities/${encodeURIComponent(searchTextLower)}`);
            setCityNotFound(false);
        } else {
            setCityNotFound(true);
        }
    };

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
                <div className="absolute w-full mt-2">
                    {cityNotFound && <p className="text-red-500 text-xs">No cities found</p>}
                </div>
            </div>
        </form>
    );
}
