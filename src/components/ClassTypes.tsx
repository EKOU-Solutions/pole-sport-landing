import { Sparkles, Flame, Wind } from "lucide-react";

const classTypes = [
  {
    icon: Sparkles,
    title: "Pole Sport",
    description:
      "Enfoque atletico y tecnico. Desarrolla fuerza, resistencia y aprende figuras que desafian la gravedad.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    level: "Todos los niveles",
  },
  {
    icon: Flame,
    title: "Pole Dancing",
    description:
      "Expresion artistica y sensualidad. Combina movimientos de pole con coreografias fluidas.",
    image: "https://images.unsplash.com/photo-1508215885820-4585e56135c8?w=600&q=80",
    level: "Principiante a avanzado",
  },
  {
    icon: Wind,
    title: "Flexibilidad",
    description:
      "Mejora tu rango de movimiento y previene lesiones. Estiramientos activos y pasivos para complementar tu entrenamiento.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80",
    level: "Todos los niveles",
  },
];

export const ClassTypes = () => {
  return (
    <section id="clases" className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">Tipos de clases</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ofrecemos diferentes modalidades para que encuentres la que mejor
            conecte contigo y tus objetivos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {classTypes.map((classType, index) => (
            <div
              key={classType.title}
              className="card-elevated group overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={classType.image}
                  alt={`Clase de ${classType.title} en Pole Sport Medellin`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-accent-foreground">
                    {classType.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <classType.icon className="h-5 w-5 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{classType.title}</h3>
                </div>
                <p className="text-muted-foreground">{classType.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
