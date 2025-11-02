export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 11c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" fill="hsl(var(--secondary))" />
        <path d="M19.5 17h-7a1 1 0 00-1 1v2c0 .552.448 1 1 1h7c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1z" fill="hsl(var(--secondary))" />
        <path d="M12.5 14.5l-2-2m9 2l2-2" stroke="hsl(var(--secondary))" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.8 22.1C21.1 24.3 18.7 25.8 16 25.8s-5.1-1.5-6.8-3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.2 22.1c-1.7-2.2-2.7-4.9-2.7-7.1 0-2.2.9-5 2.7-7.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.8 22.1c1.7-2.2 2.7-4.9 2.7-7.1 0-2.2-.9-5-2.7-7.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);
