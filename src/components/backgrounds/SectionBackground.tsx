import type { ReactNode } from "react";

interface SectionBackgroundProps {
  children: ReactNode;
  variant:
    | "hero"
    | "value"
    | "team"
    | "pricing"
    | "classes"
    | "testimonials"
    | "contact"
    | "location"
    | "footer";
  className?: string;
}

export const SectionBackground = ({ children, variant, className = "" }: SectionBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        <BackgroundVariant variant={variant} />
      </div>
      {children}
    </div>
  );
};

const BackgroundVariant = ({ variant }: { variant: string }) => {
  switch (variant) {
    case "hero":
      return <HeroBackground />;
    case "value":
      return <ValueBackground />;
    case "team":
      return <TeamBackground />;
    case "pricing":
      return <PricingBackground />;
    case "classes":
      return <ClassesBackground />;
    case "testimonials":
      return <TestimonialsBackground />;
    case "contact":
      return <ContactBackground />;
    case "location":
      return <LocationBackground />;
    case "footer":
      return <FooterBackground />;
    default:
      return null;
  }
};

const HeroBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-azul-50 via-background to-azul-100/50" />

    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g className="opacity-[0.08]">
        <line x1="0" y1="200" x2="400" y2="0" stroke="hsl(var(--azul-400))" strokeWidth="2" />
        <line x1="0" y1="350" x2="600" y2="0" stroke="hsl(var(--azul-600))" strokeWidth="1.5" />
        <line x1="0" y1="500" x2="800" y2="0" stroke="hsl(var(--turquesa-600))" strokeWidth="2" />
        <line x1="200" y1="900" x2="1000" y2="0" stroke="hsl(var(--azul-400))" strokeWidth="1" />
        <line x1="400" y1="900" x2="1200" y2="100" stroke="hsl(var(--azul-600))" strokeWidth="1.5" />
      </g>
    </svg>

    <svg
      className="absolute bottom-0 left-[-5%] h-1/2 w-[110%] opacity-30 overflow-visible"
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--azul-200))" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(var(--turquesa-600))" stopOpacity="0.2" />
          <stop offset="100%" stopColor="hsl(var(--azul-400))" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M0,200 C200,100 400,300 600,200 C800,100 1000,250 1200,180 C1300,140 1400,200 1440,220 L1440,400 L0,400 Z"
        fill="url(#hero-curve-gradient)"
        className="animate-wave-slow"
      />
      <path
        d="M0,280 C150,220 350,320 550,260 C750,200 950,300 1150,240 C1300,200 1400,280 1440,300 L1440,400 L0,400 Z"
        fill="hsl(var(--azul-200))"
        opacity="0.2"
        className="animate-wave-slower"
      />
    </svg>

    <div className="absolute right-[10%] top-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-turquesa-600/10 to-transparent blur-2xl md:h-48 md:w-48 animate-float-gentle" />
    <div className="absolute bottom-1/3 left-[5%] h-24 w-24 rounded-full bg-gradient-to-tr from-azul-400/15 to-transparent blur-xl md:h-36 md:w-36 animate-float-slow" />
  </div>
);

const ValueBackground = () => (
  <div className="absolute inset-0 bg-card">
    <svg
      className="absolute right-0 top-0 h-full w-2/3 opacity-[0.06]"
      viewBox="0 0 600 800"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="value-arc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--azul-600))" />
          <stop offset="100%" stopColor="hsl(var(--turquesa-600))" />
        </linearGradient>
      </defs>
      <path d="M600,0 Q600,400 300,600" fill="none" stroke="url(#value-arc)" strokeWidth="40" />
      <path d="M600,50 Q550,350 250,550" fill="none" stroke="hsl(var(--azul-400))" strokeWidth="25" />
      <path d="M600,100 Q500,300 200,500" fill="none" stroke="hsl(var(--azul-200))" strokeWidth="15" />
    </svg>

    <div className="absolute bottom-0 left-0 h-1/2 w-1/3 rounded-tr-[100px] bg-gradient-to-tr from-azul-100/40 to-transparent md:rounded-tr-[200px]" />
  </div>
);

const TeamBackground = () => (
  <div className="absolute inset-0 bg-background">
    <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
      <defs>
        <pattern id="team-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1" fill="hsl(var(--azul-600))" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#team-grid)" />
    </svg>

    <svg
      className="absolute left-0 top-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <circle cx="200" cy="100" r="150" fill="none" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
      <circle cx="300" cy="150" r="120" fill="none" stroke="hsl(var(--azul-400))" strokeWidth="1" />
      <circle cx="1300" cy="500" r="180" fill="none" stroke="hsl(var(--azul-600))" strokeWidth="1" />
      <circle cx="1200" cy="450" r="140" fill="none" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
    </svg>

    <div className="absolute right-0 top-1/4 h-1/2 w-1/4 bg-gradient-to-l from-azul-50/60 to-transparent" />
  </div>
);

const PricingBackground = () => (
  <div className="absolute inset-0 bg-secondary">
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pricing-shape" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--azul-400))" stopOpacity="0.08" />
          <stop offset="100%" stopColor="hsl(var(--turquesa-600))" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <polygon points="0,0 400,0 200,300 0,200" fill="url(#pricing-shape)" />
      <polygon points="1440,0 1440,250 1200,400 1100,100" fill="hsl(var(--azul-200))" opacity="0.15" />
      <polygon points="1440,800 1440,500 1100,600 1200,800" fill="hsl(var(--turquesa-600))" opacity="0.06" />
      <polygon points="0,800 0,600 250,700 200,800" fill="hsl(var(--azul-400))" opacity="0.08" />
    </svg>

    <div className="absolute left-0 top-1/4 h-px w-1/3 bg-gradient-to-r from-azul-400/20 to-transparent" />
    <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-turquesa-600/15 to-transparent" />
    <div className="absolute bottom-1/4 left-0 h-px w-1/2 bg-gradient-to-r from-azul-200/30 to-transparent" />
  </div>
);

const ClassesBackground = () => (
  <div className="absolute inset-0 bg-card">
    <svg
      className="absolute left-0 top-0 h-40 w-full opacity-40"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="classes-wave-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--secondary))" />
          <stop offset="50%" stopColor="hsl(var(--azul-100))" />
          <stop offset="100%" stopColor="hsl(var(--secondary))" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 L0,80 Q180,130 360,80 T720,80 T1080,80 T1440,80 L1440,0 Z"
        fill="url(#classes-wave-top)"
      />
    </svg>

    <svg
      className="absolute right-0 top-1/4 h-1/2 w-1/3 opacity-[0.07]"
      viewBox="0 0 400 500"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="spiral-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--turquesa-600))" />
          <stop offset="100%" stopColor="hsl(var(--azul-600))" />
        </linearGradient>
      </defs>
      <path
        d="M350,0 C350,100 200,150 200,250 C200,350 350,400 350,500"
        fill="none"
        stroke="url(#spiral-gradient)"
        strokeWidth="3"
      />
      <path
        d="M320,50 C320,150 170,200 170,300 C170,400 320,450 320,550"
        fill="none"
        stroke="hsl(var(--azul-400))"
        strokeWidth="2"
      />
    </svg>

    <svg
      className="absolute bottom-0 left-0 h-32 w-full opacity-30"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,120 L0,60 Q360,0 720,60 T1440,60 L1440,120 Z"
        fill="hsl(var(--azul-100))"
      />
    </svg>
  </div>
);

const TestimonialsBackground = () => (
  <div className="absolute inset-0 bg-background">
    <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-azul-100/30 blur-3xl" />
    <div className="absolute bottom-0 right-1/4 h-80 w-80 translate-y-1/2 rounded-full bg-turquesa-600/5 blur-3xl" />

    <svg
      className="absolute left-10 top-10 hidden h-32 w-32 opacity-[0.06] md:block"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <path
        d="M20,60 Q20,20 60,20 Q40,20 40,40 Q40,60 20,60"
        fill="hsl(var(--azul-600))"
      />
      <path
        d="M50,60 Q50,20 90,20 Q70,20 70,40 Q70,60 50,60"
        fill="hsl(var(--azul-600))"
      />
    </svg>

    <svg className="absolute inset-0 h-full w-full opacity-[0.02]" aria-hidden="true">
      <defs>
        <pattern id="testimonials-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40,0 L0,0 L0,40" fill="none" stroke="hsl(var(--azul-600))" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
    </svg>
  </div>
);

const ContactBackground = () => (
  <div className="absolute inset-0 bg-secondary">
    <div className="absolute inset-0 bg-gradient-to-br from-azul-100/40 via-transparent to-turquesa-600/10" />

    <svg
      className="absolute inset-0 h-full w-full opacity-[0.06]"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <line x1="0" y1="0" x2="500" y2="800" stroke="hsl(var(--azul-600))" strokeWidth="1" />
      <line x1="200" y1="0" x2="700" y2="800" stroke="hsl(var(--turquesa-600))" strokeWidth="1.5" />
      <line x1="1440" y1="0" x2="940" y2="800" stroke="hsl(var(--azul-400))" strokeWidth="1" />
      <line x1="1240" y1="0" x2="740" y2="800" stroke="hsl(var(--azul-600))" strokeWidth="1.5" />
    </svg>

    <div className="absolute right-0 top-0 h-1/3 w-1/3 bg-gradient-to-bl from-azul-200/20 to-transparent" />
    <div className="absolute bottom-0 left-0 h-1/4 w-1/4 bg-gradient-to-tr from-turquesa-600/10 to-transparent" />
  </div>
);

const LocationBackground = () => (
  <div className="absolute inset-0 bg-card">
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.05]"
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="topo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--azul-400))" />
          <stop offset="100%" stopColor="hsl(var(--turquesa-600))" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="300" rx="350" ry="200" fill="none" stroke="url(#topo-gradient)" strokeWidth="1" />
      <ellipse cx="400" cy="300" rx="280" ry="160" fill="none" stroke="hsl(var(--azul-400))" strokeWidth="1" />
      <ellipse cx="400" cy="300" rx="210" ry="120" fill="none" stroke="hsl(var(--azul-200))" strokeWidth="1" />
      <ellipse cx="400" cy="300" rx="140" ry="80" fill="none" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
      <ellipse cx="1100" cy="400" rx="300" ry="180" fill="none" stroke="hsl(var(--azul-400))" strokeWidth="1" />
      <ellipse cx="1100" cy="400" rx="230" ry="140" fill="none" stroke="hsl(var(--azul-200))" strokeWidth="1" />
      <ellipse cx="1100" cy="400" rx="160" ry="100" fill="none" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
    </svg>

    <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquesa-600/10 blur-2xl" />
  </div>
);

const FooterBackground = () => (
  <div className="absolute inset-0 bg-azul-900">
    <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-azul-600/25 to-transparent" />

    <svg
      className="absolute inset-0 h-full w-full opacity-[0.04]"
      viewBox="0 0 1440 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g>
        <line x1="0" y1="500" x2="300" y2="0" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
        <line x1="100" y1="500" x2="400" y2="0" stroke="hsl(var(--azul-400))" strokeWidth="0.5" />
        <line x1="1440" y1="500" x2="1140" y2="0" stroke="hsl(var(--turquesa-600))" strokeWidth="1" />
        <line x1="1340" y1="500" x2="1040" y2="0" stroke="hsl(var(--azul-400))" strokeWidth="0.5" />
      </g>
      <circle cx="720" cy="400" r="150" fill="none" stroke="hsl(var(--turquesa-600))" strokeWidth="0.5" />
      <circle cx="720" cy="400" r="100" fill="none" stroke="hsl(var(--azul-400))" strokeWidth="0.5" />
    </svg>

    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  </div>
);
