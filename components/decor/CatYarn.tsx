export function CatYarn() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Yarn ball */}
      <circle cx="120" cy="140" r="40" stroke="var(--nc-royalBlue)" strokeWidth="6" fill="none" />
      <path d="M140 150 C160 130 140 100 110 110" stroke="var(--nc-royalBlue)" strokeWidth="6" strokeLinecap="round" fill="none"/>
      
      {/* Yarn strand */}
      <path d="M100 130 Q90 110 80 100" stroke="var(--nc-royalBlue)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      
      {/* Cat body */}
      <ellipse cx="70" cy="85" rx="15" ry="20" fill="var(--nc-royalBlue)" opacity="0.8"/>
      
      {/* Cat head */}
      <circle cx="70" cy="60" r="12" fill="var(--nc-royalBlue)"/>
      
      {/* Cat ears */}
      <path d="M70 48 L65 40" stroke="var(--nc-royalBlue)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M78 48 L83 40" stroke="var(--nc-royalBlue)" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Cat tail */}
      <path d="M55 85 Q45 75 40 70 Q35 65 30 60" stroke="var(--nc-royalBlue)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      
      {/* Paw playing with yarn */}
      <circle cx="85" cy="105" r="6" fill="var(--nc-royalBlue)" opacity="0.6"/>
    </svg>
  );
}

