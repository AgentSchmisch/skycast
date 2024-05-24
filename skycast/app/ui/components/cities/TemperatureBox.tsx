export default function TemperatureBox({temp, min_temp,max_temp, city} : {temp:number, min_temp:number, max_temp:number,city:string}) {

    return(
        <div className="flex flex-col items-center justify-center drop-shadow-xl bg-white rounded-xl p-4 absolute -top-24 text-skycast-IndigoDye">
            <h1 className="font-bold text-2xl pb-2">{city}</h1>
            <p className="text-3xl font-bold">{Math.round(temp)} °C</p>
            <div className="flex flex-row justify-between px-2">
                <div className="flex flex-col text-center p-2">
                    <p>min</p>
                    <p className="text-lg font-bold">{min_temp.toFixed(1)}°C</p>
                </div>

                <div className="flex flex-col text-center p-2">
                    <p>max</p>
                    <p className="text-lg font-bold">{max_temp.toFixed(1)}°C</p>
                </div>
            </div>
        </div>
    )
}