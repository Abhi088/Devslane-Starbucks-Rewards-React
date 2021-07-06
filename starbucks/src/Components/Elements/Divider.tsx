interface Props {
    className?: string;
}

const Divider: React.FC<Props> = ({
    className
}) => {
    return (
        <hr className={className} />
    );
};

Divider.defaultProps = {
    className: "",
};

export default Divider;