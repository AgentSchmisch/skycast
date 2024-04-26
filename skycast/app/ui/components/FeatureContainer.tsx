import { faEarthEurope, faHandSparkles, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function FeatureContainer() {
    return(
        <div className="flex flex-row rounded-xl bg-white drop-shadow-xl absolute -top-24 text-skycast-IndigoDye font-sans">
            <div className="flex flex-col justify-between p-6">
                <FontAwesomeIcon className="h-12 mb-4" icon={faStopwatch} />
                <h3 className="text-lg font-semibold">Quick access</h3>
            </div>

            <div className="flex items-center m-4">
                <div className="border-2 border-skycast-IndigoDye h-20"></div>
            </div>

            <div className="flex flex-col justify-between p-6">
                <FontAwesomeIcon className="h-12 mb-4" icon={faHandSparkles} />
                <h3 className="text-lg font-semibold">Easy to use</h3>
            </div>
            <div className="flex items-center  m-4">
                <div className="border-2 border-skycast-IndigoDye h-20"></div>
            </div>

            <div className="flex flex-col justify-between p-6">
                <FontAwesomeIcon className="h-12 mb-4" icon={faEarthEurope} />
                <h3 className="text-lg font-semibold">Everywhere</h3>
            </div>
        </div>
    )
}