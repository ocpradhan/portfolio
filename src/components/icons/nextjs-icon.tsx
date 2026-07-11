import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function NextJSIcon({ size = 24, fill = "none", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 122 122"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_10_188"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="122"
        height="122"
      >
        <path
          d="M61 122C94.6894 122 122 94.6894 122 61C122 27.3106 94.6894 0 61 0C27.3106 0 0 27.3106 0 61C0 94.6894 27.3106 122 61 122Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_10_188)">
        <path
          d="M61 122C94.6894 122 122 94.6894 122 61C122 27.3106 94.6894 0 61 0C27.3106 0 0 27.3106 0 61C0 94.6894 27.3106 122 61 122Z"
          fill="black"
        />
        <path
          d="M101.333 106.763L46.8627 36.6H36.6V85.3795H44.8102V47.0272L94.8883 111.728C97.1448 110.219 99.2979 108.56 101.333 106.763Z"
          fill="url(#paint0_linear_10_188)"
        />
        <path
          d="M77.9446 36.6H86.0781V85.4H77.9446V36.6Z"
          fill="url(#paint1_linear_10_188)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_10_188"
          x1="72.6131"
          y1="78.961"
          x2="94.2302"
          y2="105.754"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_10_188"
          x1="82.0114"
          y1="36.6"
          x2="81.8738"
          y2="72.4372"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
