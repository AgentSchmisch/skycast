import Image from 'next/image';

export default function HeroImage(image:any) {
    let path = "";
    let alt = "";

    if (image.image === "/img/banner.jpg"|| image === null || image === undefined){
        path = "/img/banner.jpg";
        alt = "Banner Image";
    }

    else {
        image = image.image
        path = image.src.landscape;
        alt = image.alt;
    }
    
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
