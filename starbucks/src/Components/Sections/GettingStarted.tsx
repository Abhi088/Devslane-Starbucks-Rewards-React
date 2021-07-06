import React from 'react';
import VertCard from '../Elements/VertCard';
import Link from '../Elements/Link';
import one from '../Img/1.webp';
import two from '../Img/2.webp';
import three from '../Img/3.webp';

interface Props { }

const GettingStarted: React.FC<Props> = (props) => {
    return (
        <div className="mt-18 md:mt-28 md:mb-28 md:mx-24 space-y-12 mx-4">
            <div className="text-center space-y-4">
                <h1 className="font-bold text-2xl md:text-4xl">Getting started is easy</h1>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="space-y-6 md:flex md:space-y-0 md:space-x-3.5 md:place-content-evenly">

                <VertCard
                    className=""
                    heading_mobile="Download the Starbucks® app"
                    heading_lg="Create an account"
                    alt="1"
                    src={one}
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}>
                    <p className="text-sm font-semibold md:hidden">
                        <Link href="#" className="" text="Join in the app" /> to get access to the full range of Starbucks® Rewards benefits. You can also
                        <Link href="#" className="" text="join online." />
                    </p>
                    <p className="text-sm font-semibold text-center hidden md:block">To get started,
                        <Link href="#" className="text-sm" text="join now" />. You can also
                        <Link href="#" className="text-sm" text="join in the app" /> to get access to the full range of Starbucks® Rewards benefits.
                    </p>
                </VertCard>

                <VertCard
                    className=""
                    heading_mobile="Order and pay how you’d like"
                    heading_lg="Order and pay how you’d like"
                    alt="2"
                    src={two}
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}>
                    <p className="text-sm font-semibold md:text-center">
                        Use cash, credit/debit card or save some time and pay right through the app. You’ll collect
                        Stars
                        all ways. <a href="#" className="underline text-primary-medium">Learn how</a>
                    </p>
                </VertCard>

                <VertCard
                    className=""
                    heading_mobile="Order and pay how you’d like"
                    heading_lg="Order and pay how you’d like"
                    alt="3"
                    src={three}
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}>
                    <p className="text-sm font-semibold md:text-center">As you earn Stars, you can redeem them for
                        Rewards—like free food,
                        drinks, and more. Start
                        redeeming with as little as 25 Stars!
                    </p>
                </VertCard>

            </div>
        </div>
    );
}

export default GettingStarted;