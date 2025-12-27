import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Clases", href: "#clases" },
  { label: "Precios", href: "#precios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");

  useEffect(() => {
    const htmlLang = document.documentElement.lang.toLowerCase();
    setLang(htmlLang.startsWith("en") ? "en" : "es");
  }, []);

  const isEs = lang === "es";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <nav className="container-custom flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
        <a href="#hero" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="font-heading text-lg font-bold text-primary-foreground">PS</span>
          </div>
          <span className="hidden font-heading text-lg font-semibold text-azul-900 sm:block">
            Pole Sport Medellin
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-2 py-1 font-medium text-gris-800 transition-colors hover:text-primary focus-ring"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1">
            <a
              href="/es"
              aria-current={isEs ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                isEs ? "bg-primary text-primary-foreground" : "text-azul-900 hover:text-primary",
              )}
            >
              ES
            </a>
            <a
              href="/en"
              aria-current={isEs ? undefined : "page"}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                isEs ? "text-azul-900 hover:text-primary" : "bg-primary text-primary-foreground",
              )}
            >
              EN
            </a>
          </div>
          <Button variant="cta" size="default" asChild>
            <a href="#contacto">Reserva tu clase de prueba</a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gris-800 transition-colors hover:text-primary focus-ring lg:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-b border-border bg-card lg:hidden">
          <div className="container-custom flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 font-medium text-gris-800 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/70 p-1">
                <a
                  href="/es"
                  aria-current={isEs ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    isEs ? "bg-primary text-primary-foreground" : "text-azul-900 hover:text-primary",
                  )}
                >
                  ES
                </a>
                <a
                  href="/en"
                  aria-current={isEs ? undefined : "page"}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    isEs ? "text-azul-900 hover:text-primary" : "bg-primary text-primary-foreground",
                  )}
                >
                  EN
                </a>
              </div>
              <Button variant="cta" size="sm" asChild>
                <a href="#contacto" onClick={() => setIsOpen(false)}>
                  Reserva tu clase
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
