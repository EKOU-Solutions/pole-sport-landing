import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

type PricingProps = {
  copy: Record<string, any>;
};

export const Pricing = ({ copy }: PricingProps) => {
  const pricingCopy = copy.pricing;

  return (
    <section id="precios" className="section-padding bg-secondary">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{pricingCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{pricingCopy.subtitle}</p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12" staggerDelay={150}>
          {pricingCopy.plans.map(
            (
              plan: {
                name: string;
                price: string;
                period: string;
                description: string;
                features: string[];
                popular: boolean;
              },
            ) => (
              <div
                key={plan.name}
                className={`card-elevated p-6 lg:p-8 relative group ${
                  plan.popular ? "ring-2 ring-accent pulse-ring" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    {pricingCopy.popularBadge}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className={`w-full btn-animated ${plan.popular ? "btn-glow" : ""}`}
                  asChild
                >
                  <a href="#contacto">{pricingCopy.selectPlan}</a>
                </Button>
              </div>
            ),
          )}
        </StaggeredContainer>

        <AnimatedSection animation="fade-up" className="text-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium link-animated"
          >
            {pricingCopy.learnMore}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
