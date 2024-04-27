import Image from 'next/image';

export default function HeroImage() {
    return (
        <Image
            src="/img/banner.jpg"
            alt="Hero image of the city"
            height={7360}
            width={4920}
            className="inset-0 object-cover h-[40rem]"
        />
    );
}
