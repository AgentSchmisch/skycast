import { faEarthEurope, faHandSparkles, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function FeatureContainer() {
    return (
        <div className="flex flex-row rounded-xl bg-white drop-shadow-xl absolute -top-24 text-skycast-IndigoDye font-sans">

            <div className="flex flex-col justify-between p-6 md:p-6">
                <FontAwesomeIcon className="mb-2 md:mb-4 md:h-12 h-8" icon={faStopwatch} />
                <h3 className="text-md md:text-lg font-semibold text-center">Quick access</h3>
            </div>

            <div className="flex items-center md:m-4 md:m-2">
                <div className="border-2 border-skycast-IndigoDye md:h-20 h-16"></div>
            </div>

            <div className="flex flex-col p-6 md:p-6 justify-center items-center">
                <FontAwesomeIcon className="mb-2 md:mb-4 md:h-12 h-8" icon={faHandSparkles} />
                <h3 className="text-md md:text-lg font-semibold text-center">Easy to use</h3>
            </div>

            <div className="flex items-center md:m-4 md:m-2">
                <div className="border-2 border-skycast-IndigoDye md:h-20 h-16"></div>
            </div>

            <div className="flex flex-col justify-between p-6">
                <FontAwesomeIcon className="h-12 mb-4" icon={faEarthEurope} />
                <h3 className="text-md md:text-lg font-semibold text-center">Everywhere</h3>
            </div>

        </div>
    )
}