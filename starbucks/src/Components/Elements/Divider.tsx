interface Props {
    className?: string;
}

const StepImageComponent: React.FC<Props> = ({
    className
}) => {
    return (
        <hr className={className} />
    );
};

StepImageComponent.defaultProps = {
    className: "",
};

export default StepImageComponent;