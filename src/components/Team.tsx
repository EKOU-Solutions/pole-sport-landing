import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

type TeamProps = {
  copy: Record<string, any>;
};

export const Team = ({ copy }: TeamProps) => {
  const teamCopy = copy.team;

  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{teamCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{teamCopy.subtitle}</p>
        </AnimatedSection>

        <StaggeredContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" staggerDelay={100}>
          {teamCopy.instructors.map(
            (instructor: { name: string; role: string; image: string; instagram: string }) => (
              <div key={instructor.name} className="card-elevated overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={teamCopy.imageAltTemplate
                      .replace("{name}", instructor.name)
                      .replace("{role}", instructor.role)}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{instructor.role}</p>
                  <a
                    href={`https://instagram.com/${instructor.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-accent transition-colors link-animated"
                  >
                    <Instagram className="w-4 h-4" />
                    {instructor.instagram}
                  </a>
                </div>
              </div>
            ),
          )}
        </StaggeredContainer>

        <AnimatedSection animation="fade-up" className="text-center">
          <Button variant="cta" size="lg" className="btn-animated btn-glow" asChild>
            <a href="#contacto">{teamCopy.cta}</a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};
