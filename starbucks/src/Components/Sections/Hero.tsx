function Hero() {
    return (
        <div className="md:pl-10 space-y-5 md:space-y-8 h-180 bg-primary-light md:h-full bg-cover bg-starbucks-small bg-no-repeat md:bg-starbucks-large md:background-image py-10 md:py-32 lg:py-48 xl:py-64">
            <div className="flex flex-col space-y-3 md:space-y-0 content-center md:content-start text-center md:text-left">
                <h1 className="text-3xl font-semibold lg:text-4xl">FREE COFFEE<br />IS A TAP AWAY</h1>
                <span className="font-semibold">Join now to start earning
                    Rewards.</span>
            </div>
            <div className="flex flex-col space-y-3 md:hidden">
                <button
                    className="place-self-center bg-primary-medium font-medium rounded-full py-1.5 px-5 text-white text-center">Join
                    in the app</button>
                <a href="#" className="place-self-center underline">Or join online</a>
            </div>
            <div className="hidden md:flex flex-col space-y-5">
                <button
                    className="place-self-start bg-primary-medium font-medium rounded-full py-1.5 px-5 text-white text-center">Join
                    now</button>
                <span className="place-self-start text-lg">Or <a href="#" className="underline">join in the app</a> for the best
                    experience</span>
            </div>
        </div>
    );
}

export default Hero;