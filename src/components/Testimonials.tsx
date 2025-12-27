import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura Martinez",
    role: "Estudiante - 2 anos",
    content:
      "Llegue sin ninguna experiencia y con miedo. Hoy puedo hacer figuras que nunca imagine. El ambiente es increible y las instructoras son muy pacientes y profesionales.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
  },
  {
    name: "Camila Restrepo",
    role: "Estudiante - 1 ano",
    content:
      "Pole Sport Medellin cambio mi vida. No solo mi cuerpo se transformo, tambien mi confianza. Es un espacio seguro donde todas nos apoyamos.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    rating: 5,
  },
  {
    name: "Diego Hernandez",
    role: "Estudiante - 6 meses",
    content:
      "Pense que el pole era solo para mujeres, pero me recibieron con los brazos abiertos. El entrenamiento es intenso y muy gratificante. 100% recomendado.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Historias reales de transformacion fisica y emocional en nuestra comunidad.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
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
                  alt={`Foto de ${testimonial.name}`}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-heading font-semibold text-azul-900">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
