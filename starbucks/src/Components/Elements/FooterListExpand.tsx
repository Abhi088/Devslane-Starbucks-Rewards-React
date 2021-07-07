import React from "react";
import DownArrowIcon from './DownArrowIcon'

interface Props {
    heading: string;
    className?: string;
}

const FooterListExpand: React.FC<Props> = ({ heading, className }) => {
    return (
        <div className="flex flex-col">
            <button className="flex justify-between">
                <h1 className="font-medium">{heading}</h1>
                <DownArrowIcon />
            </button>
        </div>
    );
};

FooterListExpand.defaultProps = {
    className: "",
};

export default FooterListExpand;

// <div className="flex flex-col">
//     <button className="flex justify-between">
//         <h1 className="font-medium">About Us</h1>
//         <DownArrowIcon />
//     </button>
// </div>