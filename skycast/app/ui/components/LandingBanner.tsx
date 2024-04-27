import HeroImage from "./HeroImage";

export default function LandingBanner() {

    return (
        <div className="relative">
            <HeroImage />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-center text-white tracking-widest">Your Personal Weather Companion</p>
                <h1 className="text-5xl font-bold text-center text-white">Welcome to SkyCast</h1>
            </div>
        </div>
    );
}