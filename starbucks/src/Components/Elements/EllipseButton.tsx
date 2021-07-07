interface Props {
    className?: string;
    text: string;
}

const EllipseButton: React.FC<Props> = ({
    className,
    text
}) => {
    return (
        <button className={"rounded-full text-center " + className}>{text}</button>
    );
};

EllipseButton.defaultProps = {
    className: "",
};

export default EllipseButton;

{/* <button className="place-self-start bg-primary-medium font-medium rounded-full py-1.5 px-5 text-white text-center">
    Join now
</button> */}