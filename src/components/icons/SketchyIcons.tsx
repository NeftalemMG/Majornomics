export function SketchyTrendIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.5C3.2 17.3 5.8 14.2 6 14C6.2 13.8 8.8 16.2 9 16.4C9.2 16.6 11.5 13.8 11.7 13.6C11.9 13.4 16.8 9.3 17 9.1C17.2 8.9 20.8 6.2 21 6" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ transform: 'translate(0, 0.5px)' }}
      />
      <path d="M3 17.2C3.3 17 5.9 14.1 6.1 13.9C6.3 13.7 8.9 16.1 9.1 16.3C9.3 16.5 11.6 13.7 11.8 13.5C12 13.3 16.9 9.2 17.1 9C17.3 8.8 20.9 6.1 21.1 5.9" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"
      />
      <circle cx="21" cy="6" r="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <path d="M15 6L21 6M21 6L21 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SketchyMoneyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="12" cy="12" r="9.3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M12 5.5V18.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M9 8.5C9 7.5 10.1 7 11.5 7C12.9 7 14 7.5 14 8.5C14 9.5 12.9 10 11.5 10C10.1 10 9 10.5 9 11.5" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ transform: 'translate(0.5px, 0)' }}
      />
      <path d="M10.5 10C11.9 10 13 10.5 13 11.5C13 12.5 11.9 13 10.5 13C9.1 13 8 13.5 8 14.5C8 15.5 9.1 16 10.5 16" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ transform: 'translate(1px, 0.5px)' }}
      />
    </svg>
  );
}

export function SketchyPeopleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="9.2" cy="7.1" r="3.4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <circle cx="16" cy="7" r="3.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="16.2" cy="7.1" r="3.4" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M3 21V18.5C3 16 5 14.5 7.5 14.5H10.5C13 14.5 15 16 15 18.5V21" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V18.5C16 16.5 17.5 15 19.5 15H21" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SketchyLocationIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5C8.5 2.5 5.5 5.5 5.5 9C5.5 13.5 12 21.5 12 21.5C12 21.5 18.5 13.5 18.5 9C18.5 5.5 15.5 2.5 12 2.5Z" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M12.2 2.6C8.7 2.6 5.7 5.6 5.7 9.1C5.7 13.6 12.2 21.4 12.2 21.4" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.2"/>
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    </svg>
  );
}

export function SketchyBriefcaseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="3.2" y="8.2" width="17.8" height="11.8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M8.5 8V5.5C8.5 4.5 9 3.5 10 3.5H14C15 3.5 15.5 4.5 15.5 5.5V8" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M3 12.5H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M3.2 12.7H20.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.2"/>
    </svg>
  );
}

export function SketchyCapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 10L12 5.5L21.5 10L12 14.5L2.5 10Z" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M2.7 10.2L12.1 5.7L21.3 10.2" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.2"/>
      <path d="M6.5 12V16C6.5 17 8 18.5 12 18.5C16 18.5 17.5 17 17.5 16V12" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 10.5V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function SketchyClockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="12.2" cy="12.1" r="9.3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M12 7.5V12L15 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.2 7.7V12.2L15.2 15.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2"/>
    </svg>
  );
}

export function SketchyStarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5L14.5 9.5L22 11.5L16.5 16.5L18 23.5L12 19.5L6 23.5L7.5 16.5L2 11.5L9.5 9.5L12 2.5Z" 
        fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="19" cy="5" r="2" fill="currentColor"/>
      <circle cx="5" cy="19" r="2" fill="currentColor"/>
    </svg>
  );
}

export function SketchyBadgeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="9" r="6.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="12.2" cy="9.1" r="6.3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M8.5 13.5L7.5 21.5L12 18.5L16.5 21.5L15.5 13.5" 
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="3" fill="currentColor"/>
    </svg>
  );
}

export function SketchySearchIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="10.2" cy="10.1" r="7.3" stroke="currentColor" strokeWidth="2.5" fill="none" strokeOpacity="0.2"/>
      <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M15.7 15.7L20.8 20.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.2"/>
    </svg>
  );
}

export function SketchyFilterIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.5H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M7 12.5H17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 18.5H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="7" cy="6.5" r="2.5" fill="currentColor"/>
      <circle cx="17" cy="12.5" r="2.5" fill="currentColor"/>
      <circle cx="14" cy="18.5" r="2.5" fill="currentColor"/>
    </svg>
  );
}

export function SketchyArrowIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.2 12.2H18.8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2"/>
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function SketchyGridIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      <circle cx="6.5" cy="6.5" r="1.5" fill="currentColor"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      <circle cx="6.5" cy="17.5" r="1.5" fill="currentColor"/>
      <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor"/>
    </svg>
  );
}

export function MajornomicsLogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Graduation cap base */}
      <path d="M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Rising trend line integrated into design */}
      <path d="M6 12L8 10.5L10 11.5L12 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dollar sign */}
      <circle cx="16" cy="13" r="3.5" stroke="currentColor" strokeWidth="2.2" fill="none"/>
      <path d="M16 11.5V14.5M15 12.5C15 12 15.4 11.5 16 11.5C16.6 11.5 17 12 17 12.5C17 13 16.6 13.5 16 13.5C15.4 13.5 15 14 15 14.5C15 15 15.4 15.5 16 15.5C16.6 15.5 17 15 17 14.5" 
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Small accent dots */}
      <circle cx="12" cy="9" r="1" fill="currentColor"/>
      <circle cx="7" cy="11" r="0.8" fill="currentColor"/>
    </svg>
  );
}