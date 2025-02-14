import HeroImage from "@/app/ui/components/HeroImage";
export default function LandingBanner() {
    return (
        <div className="relative">
            <HeroImage image="/img/banner.jpg" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-5xl font-bold text-center text-white">Find your City</h1>
            </div>
        </div>
    );
}