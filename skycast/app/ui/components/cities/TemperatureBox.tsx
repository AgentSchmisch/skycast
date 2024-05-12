export default function TemperatureBox({temp, min_temp,max_temp, city} : {temp:number, min_temp:number, max_temp:number,city:string}) {

    return(
        <div className="bg-skycast-white rounded-xl p-4">
            <h1 className="font-bold text-2xl">{city}</h1>
            <p className="text-lg">Temperature: {temp} °C</p>
            <p className="text-lg">Temperature max: {max_temp} °C</p>
            <p className="text-lg">Temperature min: {min_temp} °C</p>
        </div>
    )


}