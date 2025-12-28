import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

type TeamProps = {
  copy: Record<string, any>;
};

export const Team = ({ copy }: TeamProps) => {
  const teamCopy = copy.team;

  return (
    <SectionBackground variant="team">
      <section id="equipo" className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{teamCopy.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{teamCopy.subtitle}</p>
          </AnimatedSection>

          <StaggeredContainer className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={100}>
            {teamCopy.instructors.map(
              (instructor: { name: string; role: string; image: string; instagram: string }) => (
                <div key={instructor.name} className="card-elevated overflow-hidden group">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={teamCopy.imageAltTemplate
                        .replace("{name}", instructor.name)
                        .replace("{role}", instructor.role)}
                      className="h-full w-full object-cover img-zoom"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-heading font-semibold">{instructor.name}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">{instructor.role}</p>
                    <a
                      href={`https://instagram.com/${instructor.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-accent link-animated"
                    >
                      <Instagram className="h-4 w-4" />
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
    </SectionBackground>
  );
};
