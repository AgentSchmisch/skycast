export default function DayTemperature(data:any){

    function formatDate(date: string) {
        const newDate = new Date(date);
        return newDate.toDateString().split(' ')[0];
    }

    return (
        <>
        <div className="flex flex-col items-center justify-center p-4">
            <div className="shadow-inner rounded-lg">
                <img src={`https://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`} alt="Icon for the predicted Weather" />
            </div>
            <p>{formatDate(data.data.main.date)}</p>
            <p className="text-2xl font-semibold">{data.data.main.temperature}°C</p>
        </div>
        </>
    )
}