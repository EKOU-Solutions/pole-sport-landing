import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Send, Phone, Mail, Clock } from "lucide-react";

type ContactProps = {
  copy: Record<string, any>;
};

export const Contact = ({ copy }: ContactProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactCopy = copy.contact;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: contactCopy.toast.title,
      description: contactCopy.toast.description,
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{contactCopy.title}</h2>
            <p className="mb-8 text-lg text-muted-foreground">{contactCopy.subtitle}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Phone className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">{contactCopy.info.whatsappLabel}</div>
                  <a
                    href={contactCopy.info.whatsappLink}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {contactCopy.info.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Mail className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">{contactCopy.info.emailLabel}</div>
                  <a
                    href={`mailto:${contactCopy.info.email}`}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    {contactCopy.info.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-card">
                  <Clock className="h-5 w-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-heading font-semibold text-azul-900">{contactCopy.info.hoursLabel}</div>
                  <div className="text-muted-foreground">
                    {contactCopy.info.hours.map((line: string, index: number) => (
                      <span key={line}>
                        {line}
                        {index < contactCopy.info.hours.length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6 lg:p-8">
            <h3 className="mb-6 text-xl font-heading font-semibold">{contactCopy.form.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                    {contactCopy.form.nameLabel}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={contactCopy.form.namePlaceholder}
                    className="focus-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    {contactCopy.form.phoneLabel}
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={contactCopy.form.phonePlaceholder}
                    className="focus-ring"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                  {contactCopy.form.emailLabel}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={contactCopy.form.emailPlaceholder}
                  className="focus-ring"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                  {contactCopy.form.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={contactCopy.form.messagePlaceholder}
                  className="focus-ring resize-none"
                />
              </div>
              <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  contactCopy.form.submitting
                ) : (
                  <>
                    {contactCopy.form.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">{contactCopy.form.privacy}</p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};
