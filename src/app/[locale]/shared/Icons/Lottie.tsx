import type { SVGProps } from "react";

const Lottie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 276 276"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={274} height={274} x={1} y={1} fill="url(#a)" rx={81} />
    <path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M142.892 59.721c-30.057-5.67-40.834 99.13-23.051 131.821"
    />
    <path
      stroke="#D7D5FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M119.577 191.219c17.747 32.552 50.284 32.552 65.206-4.71"
    />
    <path
      stroke="#F4F3FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={20}
      d="M142.892 59.729c30.057 5.656-2.582 97.684-50.401 145.51"
    />
    <rect width={274} height={274} x={1} y={1} stroke="url(#c)" strokeWidth={2} rx={81} />
    <defs>
      <linearGradient id="a" x1={2} x2={274} y1={2} y2={274} gradientUnits="userSpaceOnUse">
        <stop stopColor="#9688FD" />
        <stop offset={1} stopColor="#607EF4" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={132.555}
        x2={94.765}
        y1={62.627}
        y2={82.582}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4F3FF" />
        <stop offset={1} stopColor="#D7D5FF" />
      </linearGradient>
      <linearGradient id="c" x1={2} x2={274} y1={2} y2={274} gradientUnits="userSpaceOnUse">
        <stop stopColor="#9688FD" />
        <stop offset={1} stopColor="#607EF4" />
      </linearGradient>
    </defs>
  </svg>
);

export { Lottie };
