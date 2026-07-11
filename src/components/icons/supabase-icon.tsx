import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function SupabaseIcon({
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
        fill="#242938"
      />
      <mask
        id="mask0_11_38"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="13"
        width="93"
        height="96"
      >
        <path d="M15.25 13.3438H107.188V108.656H15.25V13.3438Z" fill="white" />
      </mask>
      <g mask="url(#mask0_11_38)">
        <path
          d="M68.9858 106.365C66.5739 109.403 61.6834 107.738 61.6253 103.86L60.7756 47.1354H98.9173C105.826 47.1354 109.679 55.1149 105.383 60.5254L68.9858 106.365Z"
          fill="url(#paint0_linear_11_38)"
        />
        <path
          d="M68.9858 106.365C66.5739 109.403 61.6834 107.738 61.6253 103.86L60.7756 47.1354H98.9173C105.826 47.1354 109.679 55.1149 105.383 60.5254L68.9858 106.365Z"
          fill="url(#paint1_linear_11_38)"
          fill-opacity="0.2"
        />
        <path
          d="M53.4737 15.0908C55.8856 12.0527 60.776 13.7174 60.8342 17.5956L61.2069 74.3204H23.5422C16.6335 74.3204 12.7805 66.3408 17.0767 60.9304L53.4737 15.0908Z"
          fill="#3ECF8E"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_11_38"
          x1="60.7756"
          y1="59.7128"
          x2="94.6744"
          y2="73.9301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#249361" />
          <stop offset="1" stop-color="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_11_38"
          x1="45.7467"
          y1="39.1353"
          x2="61.2064"
          y2="68.2376"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
