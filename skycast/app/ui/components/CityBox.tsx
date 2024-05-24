import CityCard from '@/app/ui/components/CityCard';
import Link from 'next/link';

export default function CityBox({cities} : {cities: string[]} ) {

    return (
        <>
        <div className="hidden md:block">
            {
                cities.map((city, index) => (
                    (index % 3 === 0) ? (
                        <div key={index} className='flex flex-row justify-around items-center mb-6'>
                            <div className='p-2 drop-shadow-xl'>
                                <CityCard city={city} />
                            </div>
                            {cities[index + 1] && (
                                <div className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 1]}/>
                                </div>
                            )}
                            {cities[index + 2] && (
                                <div className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 2]}/>
                                </div>
                            )}x
                        </div>
                    ) : null
                ))
            }
        </div>

        <div className="block md:hidden">
        {
                cities.map((city, index) => (
                    (index % 2 === 0) ? (
                        <div key={index} className='flex flex-row justify-around items-center mb-6'>
                            <div className='p-2 drop-shadow-xl'>
                                <CityCard city={city} />
                            </div>
                            {cities[index + 1] && (
                                <div className='p-2 drop-shadow-xl'>
                                    <CityCard city={cities[index + 1]} />
                                </div>
                            )}
                        </div>
                    ) : null
                ))
            }
        </div>
        </>
    );
}