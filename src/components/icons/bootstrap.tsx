import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function BootstrapIcon({
  size = 24,
  fill = "none",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 122 122"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M93.4062 0H28.5938C12.8019 0 0 12.8019 0 28.5938V93.4062C0 109.198 12.8019 122 28.5938 122H93.4062C109.198 122 122 109.198 122 93.4062V28.5938C122 12.8019 109.198 0 93.4062 0Z"
        fill="url(#paint0_linear_10_209)"
      />
      <g filter="url(#filter0_d_10_209)">
        <path
          d="M62.892 93.4811C77.0344 93.4811 85.5568 86.5561 85.5568 75.1348C85.5568 66.501 79.4763 60.2508 70.4469 59.261V58.9017C77.0806 57.8223 82.2861 51.6618 82.2861 44.7821C82.2861 34.9792 74.5472 28.5938 62.7537 28.5938H36.2188V93.4811H62.892ZM46.5378 36.8226H60.2661C67.7291 36.8226 71.9671 40.1504 71.9671 46.176C71.9671 52.6063 67.038 56.2034 58.1011 56.2034H46.5378V36.8226ZM46.5378 85.2523V63.8932H60.1736C69.9403 63.8932 75.0076 67.4903 75.0076 74.5053C75.0076 81.5198 70.0785 85.2523 60.7727 85.2523H46.5378Z"
          fill="url(#paint1_linear_10_209)"
        />
        <path
          d="M62.892 93.4811C77.0344 93.4811 85.5568 86.5561 85.5568 75.1348C85.5568 66.501 79.4763 60.2508 70.4469 59.261V58.9017C77.0806 57.8223 82.2861 51.6618 82.2861 44.7821C82.2861 34.9792 74.5472 28.5938 62.7537 28.5938H36.2188V93.4811H62.892ZM46.5378 36.8226H60.2661C67.7291 36.8226 71.9671 40.1504 71.9671 46.176C71.9671 52.6063 67.038 56.2034 58.1011 56.2034H46.5378V36.8226ZM46.5378 85.2523V63.8932H60.1736C69.9403 63.8932 75.0076 67.4903 75.0076 74.5053C75.0076 81.5198 70.0785 85.2523 60.7727 85.2523H46.5378Z"
          stroke="white"
          stroke-width="0.125"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_10_209"
          x="35.1562"
          y="27.7812"
          width="51.463"
          height="67.0123"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="0.25" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10_209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_10_209"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_10_209"
          x1="0"
          y1="0"
          x2="122"
          y2="122"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9013FE" />
          <stop offset="1" stop-color="#6B11F4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10_209"
          x1="40.8857"
          y1="32.8647"
          x2="70.7891"
          y2="83.4385"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#F1E5FC" />
        </linearGradient>
      </defs>
    </svg>
  );
}
