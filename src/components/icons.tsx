export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M50 10L61.8 38.2L90 50L61.8 61.8L50 90L38.2 61.8L10 50L38.2 38.2L50 10Z"
        stroke="hsl(var(--secondary))"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M50 10L45 50L10 50"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M50 10L55 50L90 50"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M50 90L45 50"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M50 90L55 50"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
       <path
        d="M25 25C19.477 30.523 16 38.717 16 48c0 9.283 3.477 17.477 9 23"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinecap="round"
      />
       <path
        d="M75 25C80.523 30.523 84 38.717 84 48c0 9.283-3.477 17.477-9 23"
        stroke="hsl(var(--primary))"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
);
