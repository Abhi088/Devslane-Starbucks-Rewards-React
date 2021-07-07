interface Props {
    className?: string;
    text: string;
    href: string;
}

const FooterLink: React.FC<Props> = ({
    className,
    text,
    href
}) => {
    return (
        <a href={href} className={"text-gray-400 hover:text-black font-medium " + className}>{text}</a>
    );
};

FooterLink.defaultProps = {
    className: "",
};

export default FooterLink;