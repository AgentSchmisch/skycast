import Image from 'next/image';

export default function HeroImage({path, alt} : {path: string, alt: string}) {
    return (
        <Image
            src= { path }
            alt={ alt }
            height={7360}
            width={4920}
            className="inset-0 object-cover h-[40rem] brightness-[.6] filter"
        />
    );
}
