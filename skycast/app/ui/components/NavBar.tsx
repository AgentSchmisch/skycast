import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ activePage } : {activePage: string}){
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center p-6 text-white">
        <div className='border-4 border-skycast-white rounded-full'>
                    <FontAwesomeIcon className='h-16 text-skycast-white p-4' icon={faCloudSun} />
                </div>

            <div className="flex flex-row items-center">
                <a href="#" className={`pr-6 ${activePage === 'index' ? 'font-bold underline': null}`}>Home</a>
                <a href="#" className={`pr-6 ${activePage === 'cities' ? 'font-bold underline' : null}`}>Cities</a>
                <a href="#" className={`pr-6 ${activePage === 'fav' ? 'font-bold underline' : null}`}>Fav</a>
            </div>
        </nav>
    )
}