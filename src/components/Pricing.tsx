import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basico",
    price: "$XXX.XXX",
    period: "/mes",
    description: "Perfecto para comenzar tu viaje en el pole fitness",
    features: [
      "4 clases al mes",
      "Acceso a clases grupales",
      "Equipamiento incluido",
      "Horarios flexibles",
    ],
    popular: false,
  },
  {
    name: "Intermedio",
    price: "$XXX.XXX",
    period: "/mes",
    description: "Para quienes buscan progresar mas rapido",
    features: [
      "8 clases al mes",
      "Acceso a todas las modalidades",
      "1 clase de flexibilidad incluida",
      "Practica libre (1 hora/semana)",
      "Descuento en eventos",
    ],
    popular: true,
  },
  {
    name: "Ilimitado",
    price: "$XXX.XXX",
    period: "/mes",
    description: "Acceso total para los mas dedicados",
    features: [
      "Clases ilimitadas",
      "Acceso a todas las modalidades",
      "Practica libre ilimitada",
      "Descuentos exclusivos",
      "Prioridad en inscripciones",
      "Acceso a workshops gratuitos",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="precios" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">Planes y precios</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus objetivos. Todos incluyen
            acceso a nuestras instalaciones de primera clase.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-elevated relative p-6 lg:p-8 animate-fade-in ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  Mas popular
                </div>
              )}
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-heading font-semibold">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.popular ? "cta" : "outline"} className="w-full" asChild>
                <a href="#contacto">Elegir plan</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-accent"
          >
            Conocer mas sobre los planes
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
