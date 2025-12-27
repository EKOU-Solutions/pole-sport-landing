import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="gradient-hero relative flex min-h-screen items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-secondary-foreground">
                Bienvenidos a Pole Sport Medellin
              </span>
            </div>

            <h1
              className="mb-6 text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Pole para <span className="text-gradient">todos los cuerpos.</span>
              <br />
              Fuerza, flexibilidad y confianza.
            </h1>

            <p
              className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Descubre tu fuerza interior en un espacio seguro e inclusivo.
              Entrenamiento profesional con tecnica, pasion y comunidad.
            </p>

            <div
              className="flex flex-col gap-4 justify-center sm:flex-row lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Reserva tu clase de prueba
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#clases">Ver tipos de clases</a>
              </Button>
            </div>

            <div
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              {[
                { value: "500+", label: "Estudiantes" },
                { value: "8+", label: "Anos de experiencia" },
                { value: "15+", label: "Instructores certificados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden animate-fade-in-right lg:block" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                alt="Atleta de pole fitness realizando una pose elegante"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">Clase de prueba</div>
                  <div className="text-sm text-muted-foreground">Tu primera clase gratis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
