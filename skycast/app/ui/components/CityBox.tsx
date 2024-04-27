import CityCard from '@/app/ui/components/CityCard';

export default function CityBox({cities} : {cities: string[]}) {

    return (
        <div>
            {
                cities.map((city, index) => (
                    (index % 3 === 0) ? (
                        <div key={index} className='flex flex-row mb-6'>
                            <a href="#" className='pr-6 drop-shadow-xl'>
                                <CityCard city={city} />
                            </a>
                            {cities[index + 1] && (
                                <a href="#" className='pr-6 drop-shadow-xl'>
                                    <CityCard city={cities[index + 1]} />
                                </a>
                            )}
                            {cities[index + 2] && (
                                <a href="#" className='drop-shadow-xl'>
                                    <CityCard city={cities[index + 2]} />
                                </a>
                            )}
                        </div>
                    ) : null
                ))
            }
        </div>
    );
}