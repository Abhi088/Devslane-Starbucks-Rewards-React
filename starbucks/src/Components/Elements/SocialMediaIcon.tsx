import React from "react";

interface Props {
    className?: string;
    pathd: string;
}

const SocialMediaIcon: React.FC<Props> = ({ className, pathd }) => {
    return (
        <a href="#">
            <svg className="h-8 w-8 overflow-visible fill-current" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
                <path d={pathd}></path>
                <circle fill="transparent" cx="50%" cy="50%" r="75%"></circle>
            </svg>
        </a>
    );
};

SocialMediaIcon.defaultProps = {
    className: "",
};

export default SocialMediaIcon;