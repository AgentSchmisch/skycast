"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

//TODO: fix issue with activepage displaying
const links = [
    { name: 'Home', href: '/' },
    { name: 'Cities', href: '/cities' },
    { name: 'Fav', href: '/fav' }
];

export default function NavBar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center p-6 text-white">
            <a href="/">
                <div className='border-4 border-skycast-white rounded-full'>
                    <FontAwesomeIcon className='h-8 text-skycast-white p-4' icon={faCloudSun} />
                </div>
            </a>

            <div className="flex flex-row items-center">
                {
                    links.map((link) => (
                        <a key={link.name} href={link.href} className= { clsx('pr-6', { 'font-bold underline': pathname.startsWith(link.href) })}>{link.name}</a>
                    ))
                }
            </div>
        </nav>
    )
}