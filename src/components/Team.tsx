import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

type TeamProps = {
  copy: Record<string, any>;
};

export const Team = ({ copy }: TeamProps) => {
  const teamCopy = copy.team;

  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{teamCopy.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{teamCopy.subtitle}</p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamCopy.instructors.map(
            (instructor: { name: string; role: string; image: string; instagram: string }, index: number) => (
              <div
                key={instructor.name}
                className="card-elevated group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={teamCopy.imageAltTemplate
                      .replace("{name}", instructor.name)
                      .replace("{role}", instructor.role)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-heading font-semibold">{instructor.name}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">{instructor.role}</p>
                  <a
                    href={`https://instagram.com/${instructor.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-accent"
                  >
                    <Instagram className="h-4 w-4" />
                    {instructor.instagram}
                  </a>
                </div>
              </div>
            ),
          )}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#contacto">{teamCopy.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
