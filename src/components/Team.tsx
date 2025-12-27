import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const instructors = [
  {
    name: "Maria Gonzalez",
    role: "Instructora senior de Pole Sport",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    instagram: "@maria.pole",
  },
  {
    name: "Carlos Restrepo",
    role: "Instructor de flexibilidad",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    instagram: "@carlos.flex",
  },
  {
    name: "Valentina Mejia",
    role: "Instructora de Pole Dancing",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    instagram: "@vale.dance",
  },
  {
    name: "Andres Rios",
    role: "Instructor de Pole Sport",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    instagram: "@andres.pole",
  },
];

export const Team = () => {
  return (
    <section id="equipo" className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">
            Nuestro equipo de instructores
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Instructores certificados internacionalmente con anos de experiencia en
            competencias y ensenanza profesional.
          </p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.name}
              className="card-elevated group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={instructor.image}
                  alt={`Retrato de ${instructor.name}, ${instructor.role}`}
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
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#contacto">Reserva tu clase de prueba</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
