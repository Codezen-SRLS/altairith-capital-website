import React from "react";

const stroke = "currentColor";

const Star = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="var(--color-gold)"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
    >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
);

const ArrowUpRight = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
    >
        <path
            d="M7 17l10-10M9 7h8v8"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const FlexNodes = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
    >
        <circle cx="6" cy="8" r="2.4" stroke={stroke} strokeWidth="1.6" />
        <circle cx="18" cy="16" r="2.4" stroke={stroke} strokeWidth="1.6" />
        <path
            d="M8.2 9.2c2.4 1 5.3 3 7.2 4.8"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
        />
        <path
            d="M15.8 14.8c-2.4-1-5.3-3-7.2-4.8"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.5"
        />
    </svg>
);

const InfinityIcon = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
    >
        <path
            d="M18 8c-2.21 0-4.17 1.21-6 4-1.83-2.79-3.79-4-6-4C3.79 8 2 9.79 2 12s1.79 4 4 4c2.21 0 4.17-1.21 6-4 1.83 2.79 3.79 4 6 4 2.21 0 4-1.79 4-4s-1.79-4-4-4Z"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ICONS = {
    star: Star,
    arrow: ArrowUpRight,
    flex: FlexNodes,
    infinity: InfinityIcon,
};

const Icon = ({ name, size }) => {
    const Cmp = ICONS[name] || Star;
    return <Cmp size={size} />;
};

export default Icon;
