import React from 'react';
import Card from '../Elements/Card';
import Link from '../Elements/Link';

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
                <Card
                    className=""
                    heading_mobile="Fun Freebies"
                    heading_lg="Fun Freebies"
                    alt="Coffee And Burger"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}>
                    <p>Not only can you earn free coffee, look forward to<br /> a birthday treat plus
                        coffee and tea refills.
                    </p>
                    <Link href="#" className="text-sm" text="Learn more" />
                </Card>

                <Card
                    className=""
                    heading_mobile="Order & pay ahead"
                    heading_lg="Order & pay ahead"
                    alt="Payment"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}>
                    <p className="text-sm">Enjoy the convenience of in-store, curbside or<br /> drive-thru pickup at select
                        stores.</p>
                    <Link href="#" className="text-sm" text="Learn more" />
                </Card>

                <Card
                    className=""
                    heading_mobile="Get to free faster"
                    heading_lg="Get to free faster"
                    alt="Coffee"
                    src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
                    ImgClass="h-28 md:m-auto"
                    applyMediaQueries={true}>
                    <p className="text-sm">Earn Stars even quicker with Bonus Star<br /> challenges, Double Star Days and
                        exciting
                        games.</p>
                    <Link href="#" className="text-sm" text="Learn more" />
                </Card>
            </div>
        </div>
    );
}

export default EndlessExtras;