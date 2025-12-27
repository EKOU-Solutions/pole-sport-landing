import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Send, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">
              Lista para comenzar?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Reserva tu clase de prueba gratuita y descubre el mundo del pole
              fitness. Escribenos y te contactaremos en menos de 24 horas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">WhatsApp</div>
                  <a
                    href="https://wa.me/57XXXXXXXXXX"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    +57 XXX XXX XXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Mail className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">Email</div>
                  <a
                    href="mailto:info@polesportmedellin.com"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    info@polesportmedellin.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">Horarios</div>
                  <div className="text-muted-foreground">
                    Lunes a viernes: 6:00 AM - 9:00 PM
                    <br />
                    Sabados: 8:00 AM - 2:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6 lg:p-8">
            <h3 className="mb-6 text-xl font-heading font-semibold">Reserva tu clase de prueba</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Nombre completo
                  </label>
                  <Input id="name" name="name" required placeholder="Tu nombre" className="focus-ring" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Telefono / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    className="focus-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  Correo electronico
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  className="focus-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  Mensaje (opcional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="En que clase estas interesada? Tienes alguna pregunta?"
                  className="focus-ring resize-none"
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Al enviar este formulario aceptas nuestra politica de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};
