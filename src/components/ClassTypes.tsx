import { Sparkles, Flame, Wind } from "lucide-react";

const iconMap = {
  Sparkles,
  Flame,
  Wind,
};

type ClassTypesProps = {
  copy: Record<string, any>;
};

export const ClassTypes = ({ copy }: ClassTypesProps) => {
  const classCopy = copy.classTypes;

  return (
    <section id="clases" className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{classCopy.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{classCopy.subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {classCopy.items.map(
            (
              classType: {
                icon: keyof typeof iconMap;
                title: string;
                description: string;
                image: string;
                level: string;
              },
              index: number,
            ) => {
              const Icon = iconMap[classType.icon] ?? Sparkles;
              return (
                <div
                  key={classType.title}
                  className="card-elevated group overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={classType.image}
                      alt={classCopy.imageAltTemplate.replace("{title}", classType.title)}
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
                        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-heading font-semibold">{classType.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{classType.description}</p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};
