import { Sparkles, Flame, Wind } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

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
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{classCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{classCopy.subtitle}</p>
        </AnimatedSection>

        <StaggeredContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={150}>
          {classCopy.items.map(
            (classType: { icon: keyof typeof iconMap; title: string; description: string; image: string; level: string }) => {
              const Icon = iconMap[classType.icon] ?? Sparkles;
              return (
                <div key={classType.title} className="card-elevated overflow-hidden group">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={classType.image}
                      alt={classCopy.imageAltTemplate.replace("{title}", classType.title)}
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-azul-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full transition-transform duration-300 group-hover:scale-105">
                        {classType.level}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="font-heading font-semibold text-xl">{classType.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{classType.description}</p>
                  </div>
                </div>
              );
            },
          )}
        </StaggeredContainer>
      </div>
    </section>
  );
};
