import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

type TestimonialsProps = {
  copy: Record<string, any>;
};

export const Testimonials = ({ copy }: TestimonialsProps) => {
  const testimonialsCopy = copy.testimonials;

  return (
    <SectionBackground variant="testimonials">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{testimonialsCopy.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{testimonialsCopy.subtitle}</p>
          </AnimatedSection>

          <StaggeredContainer className="grid gap-6 md:grid-cols-3 lg:gap-8" staggerDelay={150}>
            {testimonialsCopy.items.map(
              (testimonial: { name: string; role: string; content: string; image: string; rating: number }) => (
                <div key={testimonial.name} className="card-elevated relative p-6 lg:p-8 group">
                  <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/30 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-accent text-accent transition-transform duration-300 hover:scale-125"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="relative z-10 mb-6 text-foreground">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonialsCopy.imageAltTemplate.replace("{name}", testimonial.name)}
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-accent"
                    />
                    <div>
                      <div className="font-heading font-semibold text-azul-900">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </StaggeredContainer>
        </div>
      </section>
    </SectionBackground>
  );
};
