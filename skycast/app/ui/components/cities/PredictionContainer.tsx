import DayTemperature from '@/app/ui/components/cities/DayTemperature';
import _, { map } from 'underscore';

export default function PredictionContainer({data}:{data:any}) {
    //TODO: group the prediction data by date, and reevaluate the prediction

//let grouped = _.mapValues(_.groupBy(data, 'dt_txt'),clist => clist.map(date => _.omit(date, 'dt_txt')));

console.log(grouped);

    const mockData = {
        "main": {
            "temperature": 25,
            "date": "2024-05-13 00:00:00",
        },
        "weather": [
            {
                "icon": "01d",
            }
        ]
    }
    return (<>
        {console.log(data)}
            <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-xl m-6">
                <DayTemperature data={mockData}/>
            </div>
        </>
    );
}