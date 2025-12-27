import { MapPin } from "lucide-react";

type LocationProps = {
  copy: Record<string, any>;
};

export const Location = ({ copy }: LocationProps) => {
  const locationCopy = copy.location;

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{locationCopy.title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{locationCopy.subtitle}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="card-elevated p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary">
                <MapPin className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-heading font-semibold">{locationCopy.addressTitle}</h3>
                <p className="mb-4 text-muted-foreground">
                  {locationCopy.addressLines.map((line: string, index: number) => (
                    <span key={line}>
                      {line}
                      {index < locationCopy.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <a
                  href={locationCopy.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary transition-colors hover:text-accent"
                >
                  {locationCopy.mapLinkText}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex aspect-video items-center justify-center rounded-2xl bg-azul-200">
              <div className="p-8 text-center">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-primary/40" />
                <p className="font-medium text-muted-foreground">{locationCopy.mapTitle}</p>
                <p className="text-sm text-muted-foreground">{locationCopy.mapPlaceholder}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
