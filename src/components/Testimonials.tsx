import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

type TestimonialsProps = {
  copy: Record<string, any>;
};

export const Testimonials = ({ copy }: TestimonialsProps) => {
  const testimonialsCopy = copy.testimonials;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{testimonialsCopy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{testimonialsCopy.subtitle}</p>
        </AnimatedSection>

        <StaggeredContainer className="grid md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={150}>
          {testimonialsCopy.items.map(
            (testimonial: { name: string; role: string; content: string; image: string; rating: number }) => (
              <div key={testimonial.name} className="card-elevated p-6 lg:p-8 relative group">
                <Quote className="w-10 h-10 text-accent/30 absolute top-6 right-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent transition-transform duration-300 hover:scale-125"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 relative z-10">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonialsCopy.imageAltTemplate.replace("{name}", testimonial.name)}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent transition-all duration-300 group-hover:ring-accent"
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
  );
};
