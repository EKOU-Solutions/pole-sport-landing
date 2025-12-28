import { Shield, Heart, Users, Target } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

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
    <SectionBackground variant="value">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{valueCopy.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{valueCopy.subtitle}</p>
          </AnimatedSection>

          <StaggeredContainer
            className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            staggerDelay={100}
          >
            {valueCopy.values.map((value: { icon: keyof typeof iconMap; title: string; description: string }) => {
              const Icon = iconMap[value.icon] ?? Shield;
              return (
                <div key={value.title} className="card-elevated p-6 text-center group">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-primary icon-float" strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </StaggeredContainer>

          <AnimatedSection animation="scale">
            <div className="rounded-2xl bg-secondary p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2">
                <AnimatedSection delay={200} animation="fade-left" className="order-2 md:order-1">
                  <h3 className="mb-4 text-2xl font-heading font-bold md:text-3xl">{valueCopy.ceo.title}</h3>
                  <p className="mb-4 text-muted-foreground">"{valueCopy.ceo.quote1}"</p>
                  <p className="mb-6 text-muted-foreground">"{valueCopy.ceo.quote2}"</p>
                  <div>
                    <div className="font-heading font-semibold text-azul-900">{valueCopy.ceo.name}</div>
                    <div className="text-sm text-muted-foreground">{valueCopy.ceo.role}</div>
                  </div>
                </AnimatedSection>
                <AnimatedSection delay={300} animation="fade-right" className="order-1 md:order-2">
                  <div className="group aspect-square overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={valueCopy.ceo.image}
                      alt={valueCopy.ceo.imageAlt}
                      className="h-full w-full object-cover img-zoom"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </SectionBackground>
  );
};
