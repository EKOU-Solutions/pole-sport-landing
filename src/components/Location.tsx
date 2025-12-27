import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

type LocationProps = {
  copy: Record<string, any>;
};

export const Location = ({ copy }: LocationProps) => {
  const locationCopy = copy.location;

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{locationCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{locationCopy.subtitle}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="card-elevated p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                  <MapPin
                    className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{locationCopy.addressTitle}</h3>
                  <p className="text-muted-foreground mb-4">
                    {locationCopy.addressLines.map((line: string, index: number) => (
                      <span key={line}>
                        {line}
                        {index < locationCopy.addressLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <a
                    href={locationCopy.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-medium text-sm link-animated"
                  >
                    {locationCopy.mapLinkText}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200} className="lg:col-span-2">
            <div className="aspect-video lg:aspect-[16/9] rounded-2xl overflow-hidden bg-azul-200 flex items-center justify-center group transition-all duration-500 hover:shadow-xl">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-primary/40 mx-auto mb-4 animate-float-gentle" />
                <p className="text-muted-foreground font-medium">{locationCopy.mapTitle}</p>
                <p className="text-sm text-muted-foreground">{locationCopy.mapPlaceholder}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
