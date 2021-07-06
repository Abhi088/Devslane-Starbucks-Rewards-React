import React from 'react';
import Card from '../Elements/Card';

interface Props { }

const EndlessExtras: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col mt-18 px-4 space-y-12 md:mt-28">
            <div className="flex flex-col text-center space-y-4 md:place-content-center">
                <h1 className="text-2xl font-bold">Endless Extras</h1>
                <p className="font-semibold md:max-w-1/2 md:self-center">Joining Starbucks® Rewards means unlocking access
                    to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:m-auto space-y-10 md:space-y-0 md:space-x-4">
                {/* <div className="flex md:flex-col space-x-4">
                    <a href="#"><img className="h-28 md:m-auto"
                        src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" /></a>
                    <div className="flex flex-col md:text-center space-y-4">
                        <h2 className="text-xl font-bold">Fun Freebies</h2>
                        <p>Not only can you earn free coffee, look forward to<br /> a birthday treat plus
                            coffee and tea refills.
                        </p>
                        <a href="#" className="text-sm underline text-primary-medium">Learn more</a>
                    </div>
                </div> */}
                <Card
                    className="max-w-md"
                    heading_mobile="Fun Freebies"
                    heading_lg="Fun Freebies"
                    alt="2"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}
                    body_mobile="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
                    body_lg="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
                />

                <Card
                    className="max-w-md"
                    heading_mobile="Order & pay ahead"
                    heading_lg="Order & pay ahead"
                    alt="2"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}
                    body_mobile="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
                    body_lg="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
                />

                <Card
                    className="max-w-md"
                    heading_mobile="Get to free faster"
                    heading_lg="Get to free faster"
                    alt="2"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}
                    body_mobile="Earn Stars even quicker with Bonus Star<br /> challenges, Double Star Days and exciting games."
                    body_lg="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
                />
                {/* <div className="flex md:flex-col space-x-4">
                    <a href="#"><img className="h-28 md:m-auto"
                        src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" /></a>
                    <div className="flex flex-col md:text-center space-y-4">
                        <h2 className="text-xl font-bold">Order & pay ahead</h2>
                        <p className="text-sm">Enjoy the convenience of in-store, curbside or<br /> drive-thru pickup at select
                            stores.</p>
                        <a href="#" className="text-sm underline text-primary-medium">Learn more</a>
                    </div>
                </div> */}
                {/* <div className="flex md:flex-col space-x-4">
                    <a href="#"><img className="h-28 md:m-auto"
                        src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" /></a>
                    <div className="flex flex-col md:text-center space-y-4">
                        <h2 className="text-xl font-bold">Get to free faster</h2>
                        <p className="text-sm">Earn Stars even quicker with Bonus Star<br /> challenges, Double Star Days and
                            exciting
                            games.</p>
                        <a href="#" className="text-sm underline text-primary-medium">Learn more</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default EndlessExtras;