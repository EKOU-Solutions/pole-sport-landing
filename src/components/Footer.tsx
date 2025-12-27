import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/polesportmedellin", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/polesportmedellin", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@polesportmedellin", label: "YouTube" },
];

type FooterProps = {
  copy: Record<string, any>;
};

export const Footer = ({ copy }: FooterProps) => {
  const footerCopy = copy.footer;
  const yearText = footerCopy.copyright.replace("{year}", new Date().getFullYear().toString());

  return (
    <footer className="bg-azul-900 text-white">
      <div className="container-custom px-4 py-16 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl text-white/70 font-heading font-bold md:text-4xl">
            {footerCopy.ctaTitle}
          </h2>
          <p className="mb-8 text-white/70">{footerCopy.ctaText}</p>
          <Button variant="cta" size="xl" asChild>
            <a href="#contacto">{footerCopy.ctaButton}</a>
          </Button>
        </div>

        <div className="grid gap-8 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="font-heading text-lg font-bold text-azul-900">PS</span>
              </div>
              <span className="font-heading text-lg font-semibold">{copy.nav.brand}</span>
            </div>
            <p className="mb-6 max-w-sm text-sm text-white/60">{footerCopy.brandText}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">{footerCopy.headings.empresa}</h4>
            <ul className="space-y-2">
              {footerCopy.links.empresa.map((link: { label: string; href: string }) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">{footerCopy.headings.servicios}</h4>
            <ul className="space-y-2">
              {footerCopy.links.servicios.map((link: { label: string; href: string }) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading font-semibold">{footerCopy.headings.legal}</h4>
            <ul className="space-y-2">
              {footerCopy.links.legal.map((link: { label: string; href: string }) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-sm text-white/60 md:flex-row">
          <p>{yearText}</p>
          <p className="flex items-center gap-1">
            {footerCopy.made} <span className="text-accent" aria-hidden="true">&#10084;</span>{" "}
            {footerCopy.madeSuffix}
          </p>
        </div>
      </div>
    </footer>
  );
};
