import React from 'react';
import HorizCard from '../Elements/HorizCard';
import Divider from '../Elements/Divider';
import Link from '../Elements/Link';
import Star1A from '../Img/1StarA.png';
import Star1B from '../Img/1StarB.png';
import Star2A from '../Img/2StarA.png';
import Star2B from '../Img/2StarB.png';
import Star3A from '../Img/3StarA.png';

interface Props { }

const EarnStars: React.FC<Props> = (props) => {
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
                        <HorizCard
                            className=""
                            heading="Scan and Pay Seperately"
                            alt="Scan and pay"
                            src={Star1A}
                            ImgClass="h-42">
                            <p>Use cash or credit/debit card at the register.</p>
                        </HorizCard>
                        <HorizCard
                            className=""
                            heading="Save payment in the app"
                            alt="Save payment"
                            src={Star1B}
                            ImgClass="h-42">
                            <p>Check-out faster by saving a credit/debit card or<br /> PayPal to your
                                account. You’ll be ableto order<br /> ahead or scan and pay at the register in one step.
                            </p>
                        </HorizCard>
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
                        <HorizCard
                            className=""
                            heading="Preload"
                            alt="Preload"
                            src={Star2A}
                            ImgClass="h-42">
                            <p>To save time and earn Stars twice as fast, add<br /> money to your digital
                                Starbucks Card using any<br /> payment option. Scan and pay in one step or<br /> order ahead
                                in the app.
                            </p>
                        </HorizCard>
                        <HorizCard
                            className=""
                            heading="Register your gift card"
                            alt="Gift Card"
                            src={Star2B}
                            ImgClass="h-42">
                            <p>
                                Then use it to pay through the app. You can even<br /> consolidate balances from multiple cards in one<br /> place.
                            </p>
                        </HorizCard>
                    </div>
                </div>
            </div>

            <Divider className="mt-14 mb-8" />

            <div className="space-y-8 lg:flex lg:space-y-0 lg:space-x-20">
                <div className="flex flex-col ">
                    <h1 className="text-2xl font-semibold">Up to 3★ per dollar</h1>
                    <span>With Starbucks® Rewards Visa® Card</span>
                </div>
                <HorizCard
                    className=""
                    heading="Earn stars even faster"
                    alt="Earn Stars"
                    src={Star3A}
                    ImgClass="h-42">
                    <p>
                        Earn Stars on all purchases you make with our<br />
                        <Link href="#" className="" text="credit card" /> in and outside of Starbucks. Earn 1<br /> Star per $1 when you digitally preload your<br /> Starbucks Card with your Starbucks® Rewards<br /> Visa® Card, and earn 2 Stars per $1 when you pay<br /> with that preloaded Starbucks Card.
                    </p>
                </HorizCard>
            </div>
        </div>
    );
}

export default EarnStars;