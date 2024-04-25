export default function CityBox({city}) {
    return (
        <div className="border rounded-xl">
            <img className="rounded-t-xl" src="/img/vienna.jpg" alt="Hero card image of the city" />
            <div className="flex justify-center">
            <h1>{city}</h1>
            </div>
        </div>
    )
}