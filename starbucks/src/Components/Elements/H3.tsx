import React from "react";

interface Props {
    children: string;
    className?: string;
}

const H3: React.FC<Props> = ({ children, className }) => {
    return <h3 className={"font-bold text-lg " + className}>{children}</h3>;
};

H3.defaultProps = {
    className: "",
};

export default H3;