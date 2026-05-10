interface Props {
  size?: number;
  className?: string;
  ariaLabel?: string;
}

export function SentiumMark({
  size = 28,
  className,
  ariaLabel = "Sentium",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 181.68 181.68"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <circle cx="65.46" cy="31.75" r="12.34" fill="#b3ba69" />
      <circle cx="90.88" cy="8.7" r="8.7" fill="#5cbf7a" />
      <circle cx="32.78" cy="32.74" r="8.7" fill="#3b88d5" />
      <circle cx="8.7" cy="90.81" r="8.7" fill="#a354d1" />
      <circle cx="32.74" cy="148.9" r="8.7" fill="#ef8f45" />
      <circle cx="90.81" cy="172.98" r="8.7" fill="#eda1cf" />
      <circle cx="148.9" cy="148.95" r="8.7" fill="#b3ba69" />
      <circle cx="172.98" cy="90.88" r="8.7" fill="#ef4d31" />
      <circle cx="148.95" cy="32.78" r="8.7" fill="#6dcaee" />
      <circle cx="31.11" cy="67.01" r="12.34" fill="#ef4d31" />
      <circle cx="31.75" cy="116.23" r="12.34" fill="#6dcaee" />
      <circle cx="67.01" cy="150.58" r="12.34" fill="#5cbf7a" />
      <circle cx="116.23" cy="149.94" r="12.34" fill="#3b88d5" />
      <circle cx="150.58" cy="114.68" r="12.34" fill="#a354d1" />
      <circle cx="149.94" cy="65.46" r="12.34" fill="#ef8f45" />
      <circle cx="114.68" cy="31.11" r="12.34" fill="#eda1cf" />
      <path
        d="M113.92,103.07l9.09-3.47c8.03-3.07,8.03-14.43,0-17.5l-9.09-3.47c-4.98-1.9-8.92-5.84-10.82-10.82l-3.47-9.09c-3.07-8.03-14.43-8.03-17.5,0l-3.47,9.09c-1.9,4.98-5.84,8.92-10.82,10.82l-9.09,3.47c-8.03,3.07-8.03,14.43,0,17.5l9.09,3.47c4.98,1.9,8.92,5.84,10.82,10.82l3.47,9.09c3.07,8.03,14.43,8.03,17.5,0l3.47-9.09c1.9-4.98,5.84-8.92,10.82-10.82Z"
        fill="#f5c738"
      />
    </svg>
  );
}
