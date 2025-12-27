import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

type HeroProps = {
  copy: Record<string, any>;
};

export const Hero = ({ copy }: HeroProps) => {
  const hero = copy.hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-hero pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="animated-blob blob-1 w-64 h-64 bg-accent/10 top-1/4 right-1/4" />
        <div className="animated-blob blob-2 w-96 h-96 bg-primary/5 bottom-1/4 left-1/4" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <AnimatedSection delay={100} animation="fade-up">
              <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-secondary-foreground">{hero.badge}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                {hero.title} <span className="text-gradient">{hero.titleHighlight}</span>
                <br />
                {hero.titleSuffix}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300} animation="fade-up">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                {hero.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="xl" className="btn-animated btn-glow group" asChild>
                  <a href="#contacto">
                    {hero.ctaPrimary}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" className="btn-animated" asChild>
                  <a href="#clases">{hero.ctaSecondary}</a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500} animation="fade-up">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                {hero.stats.map((stat: { value: string; label: string }, index: number) => (
                  <div
                    key={stat.label}
                    className="text-center lg:text-left"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="text-3xl font-heading font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300} animation="fade-right" className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                alt={hero.imageAlt}
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-azul-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg animate-float-gentle">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">{hero.floatingCard.title}</div>
                  <div className="text-sm text-muted-foreground">{hero.floatingCard.subtitle}</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
