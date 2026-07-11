import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function HTMLIcon({ size = 24, fill = "none", ...props }: IconProps) {
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
        fill="#E14E1D"
      />
      <path
        d="M22.875 18.1094L26.9782 64.142H79.7384L77.968 83.886L60.9805 88.4791L44.0248 83.8926L42.8911 71.2151H27.612L29.7971 95.6537L60.9771 104.314L92.1967 95.6537L96.3824 48.9215H40.9005L39.5075 33.3332H97.7616L99.125 18.1094H22.875Z"
        fill="white"
      />
      <path
        d="M61 18.1094H22.875L26.9782 64.142H61V48.9215H40.9005L39.5075 33.3332H61V18.1094ZM61 88.4724L60.9805 88.4791L44.0248 83.8926L42.8911 71.2151H27.612L29.7971 95.6537L60.9771 104.314L61.0005 104.307L61 88.4724Z"
        fill="#EBEBEB"
      />
    </svg>
  );
}
