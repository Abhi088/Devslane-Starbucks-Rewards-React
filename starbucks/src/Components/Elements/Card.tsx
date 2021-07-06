import H3 from "./H3";
import Image from "./Image";

interface Props {
    className?: string;
    heading_mobile: string;
    heading_lg: string;
    alt: string;
    src: string;
    ImgClass: string;
    applyMediaQueries: boolean;
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({
    className,
    heading_mobile,
    heading_lg,
    children,
    alt,
    src,
    ImgClass,
    applyMediaQueries,
}) => {
    let outDiv = "";
    let inDiv = "";
    let h3 = "";
    if (applyMediaQueries === true) {
        outDiv = "md:flex-col md:items-center";
        inDiv = "md:text-center";
    }
    return (
        <div className={"flex " + outDiv + " space-x-4" + className}>
            <Image src={src} alt={alt} className={ImgClass}></Image>
            <div>
                <div className={"flex flex-col space-y-3 " + inDiv}>
                    <H3 className={"md:hidden "}>{heading_mobile}</H3>
                    <H3 className={"hidden md:block "}>{heading_lg}</H3>
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

{/* <div className="flex md:flex-col md:items-center space-x-4">
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
</div> */}