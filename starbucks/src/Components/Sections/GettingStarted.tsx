function GettingStarted() {
    return (
        <div className="mt-18 md:mt-28 md:mb-28 md:mx-24 space-y-12 mx-4">
            <div className="text-center space-y-4">
                <h1 className="font-bold text-2xl md:text-4xl">Getting started is easy</h1>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="space-y-6 md:flex md:space-y-0 md:space-x-3.5 md:place-content-evenly">
                <div className="flex md:flex-col md:items-center space-x-4">
                    <img className="h-12 md:w-12"
                        src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" />
                    <div className="flex flex-col space-y-3 md:items-center">
                        <h2 className="font-bold text-lg md:hidden">Download the Starbucks® app</h2>
                        <h2 className="font-bold text-lg hidden md:block">Create an account</h2>
                        <p className="text-sm font-semibold md:hidden"><a href="#" className="underline text-primary-medium">Join in
                            the
                            app</a> to get access to the full range of Starbucks® Rewards benefits. You can also <a
                                href="#" className="underline text-primary-medium">join online</a>.
                        </p>
                        <p className="text-sm font-semibold text-center hidden md:block">To get started, <a href="#"
                            className="underline text-primary-medium">join now</a>. You can also <a href="#"
                                className="underline text-primary-medium">join in the app</a> to
                            get access to the full range of Starbucks® Rewards benefits.
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-col md:items-center space-x-4">
                    <img className="h-12 md:w-12"
                        src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" />
                    <div className="flex flex-col space-y-3 md:items-center">
                        <h2 className="font-bold text-lg md:text-center">Order and pay how you’d like</h2>
                        <p className="text-sm font-semibold md:text-center">
                            Use cash, credit/debit card or save some time and pay right through the app. You’ll collect
                            Stars
                            all ways. <a href="#" className="underline text-primary-medium">Learn how</a>
                        </p>
                    </div>
                </div>
                <div className="flex md:flex-col md:items-center space-x-4">
                    <img className="h-12 md:w-12"
                        src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" />
                    <div className="flex flex-col space-y-3 md:items-center">
                        <h2 className="font-bold text-lg md:text-center">Earn Stars, get Rewards</h2>
                        <p className="text-sm font-semibold md:text-center">As you earn Stars, you can redeem them for
                            Rewards—like free food,
                            drinks, and more. Start
                            redeeming with as little as 25 Stars!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GettingStarted;