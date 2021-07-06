import Divider from '../Elements/Divider';

function EarnStars() {
    return (
        <div className="mt-18 px-4 md:px-10 py-16 bg-secondary-dark">
            <div className="flex flex-col space-y-14">
                <div className="flex flex-col text-center space-y-4">
                    <h1 className="text-3xl font-semibold">Cash or card, you earn Stars</h1>
                    <p className="font-normal">No matter how you pay, you can earn Stars with your morning coffee.<br /> Those
                        Stars
                        add
                        up to (really
                        delicious) Rewards.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold">1★ per dollar</h1>
                        <span>Pay as you go</span>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex space-x-4">
                            <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-xl font-bold">Scan and pay seperately</h2>
                                <p>Use cash or credit/debit card at the register.</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-xl font-bold">Save payment in the app</h2>
                                <p>Check-out faster by saving a credit/debit card or<br /> PayPal to your
                                    account. You’ll be ableto order<br /> ahead or scan and pay at the register in one step.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Divider className="mt-14 mb-8" />
            <div>
                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold">2★ per dollar</h1>
                        <span>Add funds in the app</span>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex space-x-4">
                            <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-xl font-bold">Preload</h2>
                                <p>To save time and earn Stars twice as fast, add<br /> money to your digital
                                    Starbucks Card using any<br /> payment option. Scan and pay in one step or<br /> order ahead
                                    in the app.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" />
                            <div className="flex flex-col space-y-3">
                                <h2 className="text-xl font-bold">Register your gift card</h2>
                                <p>Then use it to pay through the app. You can even<br /> consolidate balances
                                    from multiple cards in one<br /> place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Divider className="mt-14 mb-8" />

            <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-20">
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold">Up to 3★ per dollar</h1>
                    <span>With Starbucks® Rewards Visa® Card</span>
                </div>
                <div className="flex space-x-4">
                    <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png" />
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-xl font-bold">Earn stars even faster</h2>
                        <p>Earn Stars on all purchases you make with our<br />
                            <a href="#" className="underline text-primary-medium">credit card</a> in and outside of Starbucks.
                            Earn 1<br />
                            Star per $1 when you
                            digitally preload your<br /> Starbucks Card with your Starbucks® Rewards<br /> Visa® Card, and earn
                            2 Stars per $1 when you pay<br /> with that preloaded Starbucks Card.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EarnStars;