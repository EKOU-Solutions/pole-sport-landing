import { Shield, Heart, Users, Target } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

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
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{valueCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{valueCopy.subtitle}</p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" staggerDelay={100}>
          {valueCopy.values.map((value: { icon: keyof typeof iconMap; title: string; description: string }) => {
            const Icon = iconMap[value.icon] ?? Shield;
            return (
              <div key={value.title} className="card-elevated p-6 text-center group">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary icon-float" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            );
          })}
        </StaggeredContainer>

        <AnimatedSection animation="scale">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <AnimatedSection delay={200} animation="fade-left" className="order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{valueCopy.ceo.title}</h3>
                <p className="text-muted-foreground mb-4">"{valueCopy.ceo.quote1}"</p>
                <p className="text-muted-foreground mb-6">"{valueCopy.ceo.quote2}"</p>
                <div>
                  <div className="font-heading font-semibold text-azul-900">{valueCopy.ceo.name}</div>
                  <div className="text-sm text-muted-foreground">{valueCopy.ceo.role}</div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={300} animation="fade-right" className="order-1 md:order-2">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={valueCopy.ceo.image}
                    alt={valueCopy.ceo.imageAlt}
                    className="w-full h-full object-cover img-zoom"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
