import React from "react";
import { cn } from "@/lib/utils";
import image0 from "@/assets/car.png";
import ada from "@/assets/ada.png";
import eth from "@/assets/eth.png";
import sol from "@/assets/sol.png";
import pinkCircle from "@/assets/pink_circle.png";
import pinkCircle2 from "@/assets/pink_circle_2.png";
import star from "@/assets/star.png";
import usdt from "@/assets/usdt.png";
import xrp from "@/assets/xrp.png";
import yellowCircle from "@/assets/yellow_circle.png";

const CoinAnimation: React.FC = () => {
    return (
        <svg width="100%" height="100%" viewBox="-300 -300 600 600">
            <path
                d="M 140,0 A 140,140 0 1,0 -140,0 A 140,140 0 1,0 140,0"
                fill="none"
                stroke="hsl(var(--visual-stroke))"
                strokeWidth="5"
                id="innerMotionPath"
            />
            <path
                d="M 240,0 A 240,240 0 1,0 -240,0 A 240,240 0 1,0 240,0"
                fill="none"
                stroke="hsl(var(--visual-stroke))"
                strokeWidth="5"
                id="outerMotionPath"
            />

            

            {/* Inner orbiting tokens (larger and evenly spaced) */}
            {/* {[eth, pinkCircle2, xrp, star].map((img, i) => (
                <g key={`inner-${i}`}>
                    <image
                        href={img}
                        width="60"
                        height="60"
                        x="-30"
                        y="-30"
                    >
                        <animateMotion dur="48s" repeatCount="indefinite" begin={`${i * 12}s`}>
                            <mpath href="#innnerMotionPath" />
                        </animateMotion>
                    </image>
                </g>
            ))} */}




            {/* Inner orbiting tokens */}

            <g>
                <image
                    href={xrp}
                    width="50"
                    height="50"
                    x="-25"
                    y="-25"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="0s">
                        <mpath href="#innerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="-25"
                    y="-25"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-11s">
                        <mpath href="#innerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={yellowCircle}
                    width="50"
                    height="50"
                    x="-25"
                    y="-25"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-20s">
                        <mpath href="#innerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="-25"
                    y="-25"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-36s">
                        <mpath href="#innerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            {/* Outer orbiting tokens */}

            <g>
                <image
                    href={usdt}
                    width="100"
                    height="100"
                    x="-50"
                    y="-50"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="0s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={ada}
                    width="100"
                    height="100"
                    x="-50"
                    y="-50"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-16s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={eth}
                    width="100"
                    height="100"
                    x="-50"
                    y="-50"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-32s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={sol}
                    width="100"
                    height="100"
                    x="-50"
                    y="-50"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-40s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={pinkCircle}
                    width="20"
                    height="20"
                    x="-10"
                    y="-10"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-23s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>

            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="-25"
                    y="-25"
                >
                    <animateMotion dur="48s" repeatCount="indefinite" begin="-13s">
                        <mpath href="#outerMotionPath" />
                    </animateMotion>
                </image>
            </g>


            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="-250"
                    y="-250"
                >
                </image>
            </g>

            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="180"
                    y="-280"
                >
                </image>
            </g>

            <g>
                <image
                    href={star}
                    width="50"
                    height="50"
                    x="150"
                    y="250"
                >
                </image>
            </g>
            
            <rect x="-90" y="-90" width="180" height="180" fill="url(#patternCar)" />
            <defs>
                <pattern id="patternCar" patternUnits="objectBoundingBox" width="1" height="1">
                    <image href={image0} width="180" height="180" />
                </pattern>
            </defs>
        </svg>
    );
};

export default CoinAnimation;
