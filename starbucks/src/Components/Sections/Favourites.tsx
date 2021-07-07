import React from 'react';
import Image from '../Elements/Image';
import Star25 from '../Img/Star25.webp';
import StarsButton from '../Elements/StarsButton';

interface Props { }

const Favourites: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col mt-18">
            <div className="flex flex-col pt-12 bg-primary-extralight">
                <h1 className="mx-auto mb-4 md:mb-12 text-3xl font-semibold">Get your favorites for free</h1>
                <div className="flex place-content-evenly md:place-content-center">
                    <StarsButton starCount={25} className="border-b-4 border-primary-medium" />
                    <StarsButton starCount={50} />
                    <StarsButton starCount={150} />
                    <StarsButton starCount={200} />
                    <StarsButton starCount={400} />
                </div>
            </div>
            <div className="md:flex md:place-content-center bg-primary-light py-10 md:pt-0 md:pb-10">
                <Image className="md:h-60 md:mr-20 md:max-w-sm" src={Star25} alt="Drink" />
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