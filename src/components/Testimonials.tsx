import { Star, Quote } from "lucide-react";

type TestimonialsProps = {
  copy: Record<string, any>;
};

export const Testimonials = ({ copy }: TestimonialsProps) => {
  const testimonialsCopy = copy.testimonials;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{testimonialsCopy.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{testimonialsCopy.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonialsCopy.items.map(
            (
              testimonial: {
                name: string;
                role: string;
                content: string;
                image: string;
                rating: number;
              },
              index: number,
            ) => (
              <div
                key={testimonial.name}
                className="card-elevated relative p-6 lg:p-8 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/30" />
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-foreground">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonialsCopy.imageAltTemplate.replace("{name}", testimonial.name)}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-heading font-semibold text-azul-900">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};
