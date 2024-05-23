import DayTemperature from '@/app/ui/components/cities/DayTemperature';

export default function PredictionContainer({ data }: { data: any }) {
    //TODO: map the data to the dayTemperature component

    if (data == null) {
        return (
            <p>Loading...</p>
        )
    }

    else {
        return (
        <>
            <h2 className="m-6 text-2xl font-bold text-skycast-IndigoDye">Prediction</h2>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-xl rounded-xl m-6">
                {data.map((day: any, key:number) => {
                    return(
                        <DayTemperature data={day} key={key} />
                    )
                })}
            </div>
        </>
        );
    }
}