"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';

//TODO: fix issue with activepage displaying
const links = [
    { name: 'Home', href: '/' },
    { name: 'Cities', href: '/cities' },
    { name: 'Fav', href: '/fav' }
];

export default function NavBar({target}: {target: HTMLElement | null}) {
    const pathname = usePathname();

    const[readingProgress, setReadingProgress] = useState(0)

    const scrollListener = useCallback(()=> {
        // if the target element is not present
        if(!target.current){
            return
        }

        const element = target.current;
        const totalHeight = element.clientHeight - window.innerHeight;
        const windowScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        // if the user has not scrolled
        console.log(windowScrollTop)
        if(windowScrollTop > 640){
            return setReadingProgress(0.6)
        }
        if (windowScrollTop < 640 && windowScrollTop > 0) {
            return setReadingProgress(0)
        }
    }, [target])

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[setReadingProgress])

    return (
        // TODO: fix the percentage of the reading progress
        <nav style={{backgroundColor:`rgba(40, 75, 99, ${readingProgress})`}} className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center p-2 text-white">
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