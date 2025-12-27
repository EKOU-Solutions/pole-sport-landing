import { Shield, Heart, Users, Target } from "lucide-react";

const iconMap = {
  Shield,
  Heart,
  Users,
  Target,
};

type ValuePropositionProps = {
  copy: Record<string, any>;
};

export const ValueProposition = ({ copy }: ValuePropositionProps) => {
  const valueCopy = copy.value;

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{valueCopy.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{valueCopy.subtitle}</p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {valueCopy.values.map(
            (value: { icon: keyof typeof iconMap; title: string; description: string }, index: number) => {
              const Icon = iconMap[value.icon] ?? Shield;
              return (
                <div
                  key={value.title}
                  className="card-elevated p-6 text-center animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            },
          )}
        </div>

        <div className="rounded-2xl bg-secondary p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h3 className="mb-4 text-2xl font-heading font-bold md:text-3xl">{valueCopy.ceo.title}</h3>
              <p className="mb-4 text-muted-foreground">"{valueCopy.ceo.quote1}"</p>
              <p className="mb-6 text-muted-foreground">"{valueCopy.ceo.quote2}"</p>
              <div>
                <div className="font-heading font-semibold text-azul-900">{valueCopy.ceo.name}</div>
                <div className="text-sm text-muted-foreground">{valueCopy.ceo.role}</div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={valueCopy.ceo.image}
                  alt={valueCopy.ceo.imageAlt}
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
