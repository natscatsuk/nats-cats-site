import * as React from "react";

type PawPrintIconProps = React.SVGProps<SVGSVGElement>;

export function PawPrintIcon(props: PawPrintIconProps) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        d="M15.9 17.5c-2.7 0-5 2.1-5 4.7 0 2.4 1.9 4.3 4.5 4.7 1.7.2 3.3-.2 4.5-1.1 1.1-.8 1.8-2.1 1.8-3.5 0-2.6-2.2-4.8-4.9-4.8h-.9z"
        fill="#F89C3B"
      />
      <circle cx="9.5" cy="12" r="2.4" fill="#FBB45C" />
      <circle cx="14.1" cy="9.6" r="2.5" fill="#FBB45C" />
      <circle cx="18.7" cy="9.6" r="2.5" fill="#FBB45C" />
      <circle cx="23.3" cy="12" r="2.4" fill="#FBB45C" />
      <path
        d="M15.9 17.5c-2.7 0-5 2.1-5 4.7 0 2.4 1.9 4.3 4.5 4.7 1.7.2 3.3-.2 4.5-1.1 1.1-.8 1.8-2.1 1.8-3.5 0-2.6-2.2-4.8-4.9-4.8h-.9z"
        fill="none"
        stroke="#D7741E"
        strokeWidth="0.7"
      />
      <circle
        cx="9.5"
        cy="12"
        r="2.4"
        fill="none"
        stroke="#E28B2A"
        strokeWidth="0.6"
      />
      <circle
        cx="14.1"
        cy="9.6"
        r="2.5"
        fill="none"
        stroke="#E28B2A"
        strokeWidth="0.6"
      />
      <circle
        cx="18.7"
        cy="9.6"
        r="2.5"
        fill="none"
        stroke="#E28B2A"
        strokeWidth="0.6"
      />
      <circle
        cx="23.3"
        cy="12"
        r="2.4"
        fill="none"
        stroke="#E28B2A"
        strokeWidth="0.6"
      />
    </svg>
  );
}

export default PawPrintIcon;

