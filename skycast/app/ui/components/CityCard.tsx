export default function CityCard({ city }) {
    return (
        <div className="border rounded-xl">
            <img className="rounded-t-xl" src="/img/vienna.jpg" alt={`Hero card image of ${city}`} />
            <div className="flex justify-center bg-skycast-white rounded-b-xl">
                <h1 className="p-6 font-bold">{city}</h1>
            </div>
        </div>
    )
}