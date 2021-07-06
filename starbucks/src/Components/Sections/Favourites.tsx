function Favourites() {
    return (
        <div className="flex flex-col mt-18">
            <div className="flex flex-col pt-12 bg-primary-extralight">
                <h1 className="mx-auto mb-4 md:mb-12 text-3xl font-semibold">Get your favorites for free</h1>
                <div className="flex place-content-evenly md:place-content-center">
                    <button className="h-12 border-b-4 border-primary-medium w-full md:w-28 text-2xl font-semibold">25<span
                        className="text-gold">★</span></button>
                    <button className="h-12 w-full md:w-28 text-2xl font-semibold">50<span className="text-gold">★</span></button>
                    <button className="h-12 w-full md:w-28 text-2xl font-semibold">150<span className="text-gold">★</span></button>
                    <button className="h-12 w-full md:w-28 text-2xl font-semibold">200<span className="text-gold">★</span></button>
                    <button className="h-12 w-full md:w-28 text-2xl font-semibold">400<span className="text-gold">★</span></button>
                </div>
            </div>
            <div className="md:flex md:place-content-center bg-primary-light py-10 md:pt-0 md:pb-10">
                <img className="md:h-60 md:mr-20 md:max-w-sm"
                    src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" />
                <div className="flex flex-col mt-7 space-y-4 md:space-y-5 md:place-content-center">
                    <h1 className="text-2xl font-semibold text-center md:text-left">Customize your drink</h1>
                    <p className="text-center font-semibold md:text-left">Make your drink just right with an
                        extra<br className="hidden md:block" />
                        espresso shot,
                        dairy<br className="md:hidden" />
                        substitute or a
                        dash of<br className="hidden md:block" />
                        your favorite
                        syrup.</p>
                </div>
            </div>
        </div>
    );
}

export default Favourites;