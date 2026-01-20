"use client";
import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
    className?: string;
    fill?: string;
};

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
    return (
        <svg
            className={cn(
                "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
                className
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#filter0_f_29_215)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2072.8 193.525C2162.24 186.273 2271.95 240.248 2383.5 328.799C2518.2 435.753 2686.2 552.053 2831.64 695.732C3005.11 867.045 3216.74 1104.93 3317.81 1434.34C3411.33 1739.08 3409.77 1978.88 3326.69 2174.45C3278.43 2288.08 3173.23 2341.6 3025.21 2368.12C2849.56 2399.59 2617.96 2382.46 2390.62 2320.1C2106.67 2242.22 1827.42 2011.08 1629.47 1761.37C1466.85 1556.16 1324.93 1354.2 1243.61 1184.88C1131.79 952.179 1103.04 786.13 1157.92 638.16C1198 530.158 1289.87 470.978 1419.82 433.882C1542.86 398.773 1679.99 380.005 1801.38 339.814C1929.5 297.359 2010.51 198.575 2072.8 193.525Z"
                    fill={fill}
                    fillOpacity="0.21"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_29_215"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="151"
                        result="effect1_foregroundBlur_29_215"
                    />
                </filter>
            </defs>
        </svg>
    );
};
