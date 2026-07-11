import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function NPMIcon({ size = 24, fill = "none", ...props }: IconProps) {
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
        d="M0 6.73097C0 3.07383 3.07383 0 6.73097 0H115.273C118.931 0 122.005 3.07383 122.005 6.73097V115.273C122.005 118.931 118.931 122.005 115.273 122.005H6.73097C3.07383 122.005 0 118.931 0 115.273V6.73097ZM22.5795 99.6778H61.081L61.1287 43.8895H79.7089L79.6612 99.7245H98.2882L98.3358 25.3093L23.9206 25.214L23.8253 99.6778H22.5795Z"
        fill="#CB3837"
      />
      <path
        d="M23.9282 62.4487V25.2692H39.04C47.3513 25.2692 64.0824 25.3016 76.2195 25.3407L98.2872 25.4122V99.6282H79.7242V43.8323H61.0543V99.6282H23.9282V62.4487Z"
        fill="white"
      />
    </svg>
  );
}
