import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

type HeroProps = {
  copy: Record<string, any>;
};

export const Hero = ({ copy }: HeroProps) => {
  const hero = copy.hero;

  return (
    <SectionBackground variant="hero">
      <section id="hero" className="relative flex min-h-screen items-center pt-20">
        <div className="container-custom relative z-10 px-4 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <AnimatedSection delay={100} animation="fade-up">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-secondary-foreground">{hero.badge}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200} animation="fade-up">
                <h1 className="mb-6 text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-6xl">
                  {hero.title} <span className="text-gradient">{hero.titleHighlight}</span>
                  <br />
                  {hero.titleSuffix}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={300} animation="fade-up">
                <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl lg:mx-0 mx-auto">
                  {hero.subtitle}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={400} animation="fade-up">
                <div className="flex flex-col gap-4 justify-center lg:justify-start sm:flex-row">
                  <Button variant="hero" size="xl" className="btn-animated btn-glow group" asChild>
                    <a href="#contacto">
                      {hero.ctaPrimary}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="xl" className="btn-animated" asChild>
                    <a href="#clases">{hero.ctaSecondary}</a>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={500} animation="fade-up">
                <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
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
              <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                  alt={hero.imageAlt}
                  className="h-full w-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-lg animate-float-gentle">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                    <Sparkles className="h-6 w-6 text-accent" />
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
    </SectionBackground>
  );
};
