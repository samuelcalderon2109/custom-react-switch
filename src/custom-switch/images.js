import React from 'react'

export const SwitchSelected = ({ color }) => (
    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i)">
            <rect width="30" height="16" rx="8" transform="matrix(-1 0 0 1 30 0)" fill={color} />
        </g>
        <rect x="-0.5" y="0.5" width="29" height="15" rx="7.5" transform="matrix(-1 0 0 1 29 0)" stroke="#F2F2F2" />
        <circle r="7" transform="matrix(-1 0 0 1 22 8)" fill="white" />
        <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
    </svg>

);

export const SwitchNotSelected = () => (
    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i)">
            <rect width="30" height="16" rx="8" fill="#E8E8E8" />
        </g>
        <rect x="0.5" y="0.5" width="29" height="15" rx="7.5" stroke="#F2F2F2" />
        <circle cx="8" cy="8" r="7" fill="#FAFAFA" />
        <defs>
            <filter id="filter0_i" x="0" y="0" width="30" height="20" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
            </filter>
        </defs>
    </svg>


);