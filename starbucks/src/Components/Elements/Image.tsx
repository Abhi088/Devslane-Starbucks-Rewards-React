import React from "react";
import { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
    className: string;
    alt: string;
    src: string;
}

const Image: React.FC<Props> = ({
    className,
    alt,
    src,
}) => {
    return <img className={className} alt={alt} src={src} />;
};

Image.defaultProps = {};

export default Image;

{/* <img className="h-12 md:w-12"
    src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" /> */}