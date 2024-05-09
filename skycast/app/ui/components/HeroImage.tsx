import Image from 'next/image';

export default function HeroImage({path} : {path: string}) {
    return (
        //<img src={path} alt="" />
        
        <Image
            src= { path }
            alt="Hero image of the city"
            height={7360}
            width={4920}
            className="inset-0 object-cover h-[40rem] brightness-[.6] filter"
        />
    );
}
