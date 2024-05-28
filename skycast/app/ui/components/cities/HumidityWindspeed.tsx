export default function HumidityWindspeed({ data }: { data: any }) {
    return (
        <div className="flex justify-between items-center bg-white shadow-xl rounded-xl m-6 text-skycast-IndigoDye">
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-lg font-semibold ml-2">Humidity</p>
                <p className="text-2xl font-semibold">{data.main.humidity}%</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-lg font-semibold ml-2">Windspeed</p>
                <p className="text-2xl font-semibold">{Math.round(data.wind.speed * 3.6)} km/h</p>
            </div>
        </div>

    );
}