import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function AzureDevOpsIcon({
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
        d="M115.223 27.1117V93.127L88.1116 115.358L46.0884 100.041V115.224L22.2984 84.1133L91.6344 89.5347V30.094L115.223 27.1117ZM92.11 30.4333L53.2034 6.77673V22.2984L17.4879 32.8047L6.77576 46.5621V77.8103L22.0972 84.587V44.5281L92.11 30.4333Z"
        fill="url(#paint0_linear_11_67)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11_67"
          x1="61"
          y1="115.019"
          x2="61"
          y2="6.98112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0078D4" />
          <stop offset="0.16" stop-color="#1380DA" />
          <stop offset="0.53" stop-color="#3C91E5" />
          <stop offset="0.82" stop-color="#559CEC" />
          <stop offset="1" stop-color="#5EA0EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
