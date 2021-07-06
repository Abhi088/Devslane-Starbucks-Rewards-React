interface Props {
    className?: string;
    text: string;
    href: string;
}

const Link: React.FC<Props> = ({
    className,
    text,
    href
}) => {
    return (
        <a href={href} className={"underline text-primary-medium " + className}>{text}</a>
    );
};

Link.defaultProps = {
    className: "",
};

export default Link;