interface Props {
    className?: string;
    starCount: Number;
}

const StarsButton: React.FC<Props> = ({
    className,
    starCount,
}) => {
    return (
        <button className={"h-12 w-full md:w-28 text-2xl font-semibold " + className}>
            {starCount}
            < span className="text-gold" >★</span >
        </button >
    );
};

StarsButton.defaultProps = {
    className: "",
};

export default StarsButton;