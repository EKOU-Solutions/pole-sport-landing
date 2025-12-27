import { Shield, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Seguridad primero",
    description:
      "Equipos profesionales certificados, colchonetas de seguridad y tecnicas progresivas para un entrenamiento sin riesgos.",
  },
  {
    icon: Heart,
    title: "Inclusividad",
    description:
      "Todos los cuerpos son bienvenidos. Clases adaptadas a todos los niveles, edades y capacidades fisicas.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Mas que una academia, somos una familia. Apoyo mutuo, eventos y conexiones que duran toda la vida.",
  },
  {
    icon: Target,
    title: "Tecnica profesional",
    description:
      "Instructores certificados internacionalmente con metodologia progresiva y enfoque en fundamentos solidos.",
  },
];

export const ValueProposition = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">Por que elegirnos?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            En Pole Sport Medellin combinamos pasion, profesionalismo y un ambiente
            acogedor para ayudarte a alcanzar tus metas.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-elevated p-6 text-center animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                <value.icon className="h-7 w-7 text-primary" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-lg font-heading font-semibold">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-secondary p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-heading font-bold md:text-3xl">
                Conoce a nuestra fundadora
              </h3>
              <p className="mb-4 text-muted-foreground">
                "Funde Pole Sport Medellin con la vision de crear un espacio donde
                cualquier persona pudiera descubrir la magia del pole fitness. Despues
                de anos de entrenamiento y competencias internacionales, quise traer
                esta disciplina a mi ciudad de una manera profesional, segura y
                accesible para todos."
              </p>
              <p className="mb-6 text-muted-foreground">
                "Cada estudiante que entra por nuestras puertas es parte de nuestra
                familia. Ver sus transformaciones fisicas y emocionales es lo que nos
                impulsa cada dia."
              </p>
              <div>
                <div className="font-heading font-semibold text-azul-900">[Nombre de la CEO]</div>
                <div className="text-sm text-muted-foreground">
                  Fundadora y directora | Certificada IPSF
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80"
                  alt="Retrato de la fundadora de Pole Sport Medellin"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
