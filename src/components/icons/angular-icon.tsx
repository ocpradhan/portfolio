import type { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function AngularIcon({ size = 24, fill = "none", ...props }: IconProps) {
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
      <path
        d="M16.3223 29.1299L60.6783 13.3438L106.202 28.8854L98.8448 87.5445L60.6783 108.656L23.1314 87.8186L16.3223 29.1299Z"
        fill="#E23237"
      />
      <path
        d="M106.202 28.8859L60.6783 13.3438V108.656L98.8448 87.5445L106.202 28.8859Z"
        fill="#B52E31"
      />
      <path
        d="M60.7469 24.4834L33.1063 85.96L43.421 85.7512L48.9906 71.8599H73.7123L79.7647 85.8589L89.5995 86.0672L60.7469 24.4834ZM60.8151 44.2188L70.1676 63.7493H52.6602L60.8423 44.2188H60.8151Z"
        fill="white"
      />
    </svg>
  );
}
