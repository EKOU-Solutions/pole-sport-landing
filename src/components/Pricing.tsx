import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

type PricingProps = {
  copy: Record<string, any>;
};

export const Pricing = ({ copy }: PricingProps) => {
  const pricingCopy = copy.pricing;

  return (
    <SectionBackground variant="pricing">
      <section id="precios" className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{pricingCopy.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{pricingCopy.subtitle}</p>
          </AnimatedSection>

          <StaggeredContainer className="mb-12 grid gap-6 md:grid-cols-3 lg:gap-8" staggerDelay={150}>
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
                <AnimatedSection key={plan.name} animation="fade-up" delay={150}>
                  <div
                    className={`card-elevated relative p-6 lg:p-8 group ${
                      plan.popular ? "ring-2 ring-accent pulse-ring" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                        {pricingCopy.popularBadge}
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
                    <Button
                      variant={plan.popular ? "cta" : "outline"}
                      className={`w-full btn-animated ${plan.popular ? "btn-glow" : ""}`}
                      asChild
                    >
                      <a href="#contacto">{pricingCopy.selectPlan}</a>
                    </Button>
                  </div>
                </AnimatedSection>
              ),
            )}
          </StaggeredContainer>

          <AnimatedSection animation="fade-up" className="text-center">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 text-primary transition-colors hover:text-accent font-medium link-animated"
            >
              {pricingCopy.learnMore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </SectionBackground>
  );
};
