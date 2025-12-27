import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Send, Phone, Mail, Clock } from "lucide-react";
import { AnimatedSection, StaggeredContainer } from "@/hooks/useScrollAnimation";

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

  const contactInfo = [
    {
      icon: Phone,
      title: contactCopy.info.whatsappLabel,
      content: contactCopy.info.whatsapp,
      href: contactCopy.info.whatsappLink,
    },
    {
      icon: Mail,
      title: contactCopy.info.emailLabel,
      content: contactCopy.info.email,
      href: `mailto:${contactCopy.info.email}`,
    },
    {
      icon: Clock,
      title: contactCopy.info.hoursLabel,
      content: contactCopy.info.hours,
    },
  ];

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection animation="fade-right">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{contactCopy.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{contactCopy.subtitle}</p>

            <StaggeredContainer className="space-y-6" staggerDelay={100}>
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-105">
                    <info.icon
                      className="w-5 h-5 text-primary transition-colors group-hover:text-primary-foreground"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-azul-900">{info.title}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-accent transition-colors link-animated"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">
                        {info.content.map((line: string, index: number) => (
                          <span key={line}>
                            {line}
                            {index < info.content.length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </StaggeredContainer>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="card-elevated p-6 lg:p-8">
              <h3 className="font-heading font-semibold text-xl mb-6">{contactCopy.form.title}</h3>
              <form onSubmit={handleSubmit} className="space-y-5" data-lpignore="true">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      {contactCopy.form.nameLabel}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder={contactCopy.form.namePlaceholder}
                      data-lpignore="true"
                      className="focus-ring transition-all duration-300 hover:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      {contactCopy.form.phoneLabel}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder={contactCopy.form.phonePlaceholder}
                      data-lpignore="true"
                      className="focus-ring transition-all duration-300 hover:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    {contactCopy.form.emailLabel}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={contactCopy.form.emailPlaceholder}
                    data-lpignore="true"
                    className="focus-ring transition-all duration-300 hover:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    {contactCopy.form.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={contactCopy.form.messagePlaceholder}
                    data-lpignore="true"
                    className="focus-ring resize-none transition-all duration-300 hover:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full btn-animated btn-glow group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">{contactCopy.form.submitting}</span>
                  ) : (
                    <>
                      {contactCopy.form.submit}
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">{contactCopy.form.privacy}</p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Toaster />
    </section>
  );
};
