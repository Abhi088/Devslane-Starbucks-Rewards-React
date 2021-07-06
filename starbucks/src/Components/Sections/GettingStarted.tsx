import React from 'react';
import Card from '../Elements/Card';

interface Props { }

const GettingStarted: React.FC<Props> = (props) => {
    return (
        <div className="mt-18 md:mt-28 md:mb-28 md:mx-24 space-y-12 mx-4">
            <div className="text-center space-y-4">
                <h1 className="font-bold text-2xl md:text-4xl">Getting started is easy</h1>
                <p>Earn Stars and get rewarded in a few easy steps.</p>
            </div>
            <div className="space-y-6 md:flex md:space-y-0 md:space-x-3.5 md:place-content-evenly">

                <Card
                    className=""
                    heading_mobile="Download the Starbucks® app"
                    heading_lg="Create an account"
                    alt="1"
                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}
                    body_mobile="Join in the app to get access to the full range of Starbucks® Rewards benefits. You can also join online"
                    body_lg="To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits."
                />

                <Card
                    className=""
                    heading_mobile="Order and pay how you’d like"
                    heading_lg="Order and pay how you’d like"
                    alt="2"
                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}
                    body_mobile="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how"
                    body_lg="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how"
                />

                <Card
                    className=""
                    heading_mobile="Order and pay how you’d like"
                    heading_lg="Order and pay how you’d like"
                    alt="3"
                    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
                    ImgClass="h-12 md:w-12"
                    applyMediaQueries={true}
                    body_mobile="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
                    body_lg="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
                />

            </div>
        </div>
    );
}

export default GettingStarted;