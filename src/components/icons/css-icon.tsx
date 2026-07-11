import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function CSSIcon({ size = 24, fill = "none", ...props }: IconProps) {
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
        d="M17.9321 108.773L8.34937 1.28864H113.651L104.058 108.757L60.9361 120.712L17.9321 108.773Z"
        fill="#1572B6"
      />
      <path
        d="M61.001 111.575L95.8463 101.914L104.044 10.0764H61.001V111.575Z"
        fill="#33A9DC"
      />
      <path
        d="M61.001 49.0183H78.4451L79.6498 35.5192H61.001V22.3365H94.0573L93.7408 25.8735L90.5002 62.2009H61.001V49.0183Z"
        fill="white"
      />
      <path
        d="M61.0791 83.2545L61.021 83.2717L46.34 79.3076L45.4011 68.7937H32.1699L34.0161 89.4927L61.019 96.9871L61.0791 96.97V83.2545Z"
        fill="#EBEBEB"
      />
      <path
        d="M77.3242 61.6434L75.7363 79.2971L61.0334 83.266V96.9814L88.0583 89.4918L88.2565 87.2643L90.5498 61.6434H77.3242Z"
        fill="white"
      />
      <path
        d="M61.0458 22.3365V35.5192H29.2038L28.9398 32.5568L28.3393 25.8735L28.0238 22.3365H61.0458ZM61.001 49.0202V62.2029H46.5049L46.2409 59.2405L45.6395 52.5572L45.3249 49.0202H61.001Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
