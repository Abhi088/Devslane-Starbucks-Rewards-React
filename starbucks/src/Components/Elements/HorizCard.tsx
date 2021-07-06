import H3 from "./H3";
import Image from "./Image";

interface Props {
    className?: string;
    heading: string;
    alt: string;
    src: string;
    ImgClass: string;
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({
    className,
    heading,
    children,
    alt,
    src,
    ImgClass,
}) => {
    return (
        <div className={"flex " + " space-x-4" + className}>
            <Image src={src} alt={alt} className={ImgClass}></Image>
            <div>
                <div className={"flex flex-col space-y-3 "}>
                    <H3>{heading}</H3>
                    {children}
                </div>
            </div>
        </div>
    );
};

Card.defaultProps = {
    className: "",
};

export default Card;

{/* <div className="flex space-x-4">
    <img className="h-42" src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" />
    <div className="flex flex-col space-y-3">
        <h2 className="text-xl font-bold">Scan and pay seperately</h2>
        <p>Use cash or credit/debit card at the register.</p>
    </div>
</div> */}