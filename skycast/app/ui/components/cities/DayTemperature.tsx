export default function DayTemperature(data: any){

    function formatDate(date: string) {
        //date formatting: Day of week, dd.MM.yyyy
        const newDate = new Date(date);
        return newDate.toDateString().split(' ')[0] + ", " + newDate.toDateString().split(' ')[2] + ". " + newDate.toDateString().split(' ')[1];
    }

        data = data.data;
        return (
            <>
                <div className="flex flex-col items-center justify-center p-4 rounded-lg drop-shadow-xl m-2">
                    <div className="shadow-inner rounded-lg mb-4">
                        <img src={`https://openweathermap.org/img/wn/${data.icon}.png`} alt="Icon for the predicted Weather" />
                    </div>
                    <p>{formatDate(data.date)}</p>
                    <p className="text-2xl font-semibold">{data.temp}°C</p>
                </div>
            </>
        )
    
}