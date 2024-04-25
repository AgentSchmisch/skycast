import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CityBox from '@/app/ui/cityBox';

export default function Page() {
  const cities = ["Vienna", "Linz", "Graz", "St. Pölten", "Salzburg", "Innsbruck", "Klagenfurt"];

  return (
    <main className="flex flex-col p-6">
      <h1>Austria</h1>
      <div className='flex flex-row'>
      {cities.map((city, index) => (
        <div className='pr-6'>
        <CityBox key={index} city={city} />
        </div>
      ))}
      </div>
    </main>
  );
}
