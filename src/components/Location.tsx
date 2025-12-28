import { useEffect, useMemo, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { SectionBackground } from "@/components/backgrounds/SectionBackground";

type LocationProps = {
  copy: Record<string, any>;
};

export const Location = ({ copy }: LocationProps) => {
  const locationCopy = copy.location;
  const locations = useMemo(() => locationCopy.locations ?? [], [locationCopy]);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapError, setMapError] = useState(false);

  const buildAddress = (lines: string[]) => lines.join(", ");

  useEffect(() => {
    let isMounted = true;
    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;
      if (!locations.length) {
        setMapError(true);
        return;
      }

      try {
        const leaflet = await import("leaflet");
        const L = (leaflet as any).default ?? leaflet;

        const markerIcon = L.icon({
          iconRetinaUrl: "/leaflet/marker-icon-2x.png",
          iconUrl: "/leaflet/marker-icon.png",
          shadowUrl: "/leaflet/marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });

        const map = L.map(mapRef.current, { scrollWheelZoom: false });
        mapInstanceRef.current = map;

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
          maxZoom: 19,
        }).addTo(map);

        const coords: Array<[number, number]> = [];
        for (const location of locations) {
          const query = buildAddress(location.addressLines);
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
          );
          const data = await response.json();
          if (data?.[0]) {
            const lat = parseFloat(data[0].lat);
            const lon = parseFloat(data[0].lon);
            coords.push([lat, lon]);
            L.marker([lat, lon], { icon: markerIcon }).addTo(map).bindPopup(location.name);
          }
        }

        if (!coords.length) {
          map.remove();
          mapInstanceRef.current = null;
          if (isMounted) setMapError(true);
          return;
        }

        const bounds = L.latLngBounds(coords);
        map.fitBounds(bounds, { padding: [40, 40] });
      } catch (error) {
        if (isMounted) setMapError(true);
      }
    };

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations]);

  return (
    <SectionBackground variant="location">
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold md:text-4xl">{locationCopy.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{locationCopy.subtitle}</p>
          </AnimatedSection>

          <div className="grid items-start gap-8 lg:grid-cols-3">
            <div className="space-y-6">
              {locations.map((location: {
                name: string;
                addressLines: string[];
                details?: string[];
                mapLink?: string;
                mapLinkLabel?: string;
              }, index: number) => (
                <AnimatedSection key={location.name} animation="fade-right" delay={100 + index * 100}>
                  <div className="card-elevated p-6 group">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary flex-shrink-0">
                        <MapPin
                          className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground"
                          strokeWidth={2}
                        />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-heading font-semibold">{location.name}</h3>
                        <p className="mb-3 text-muted-foreground">
                          {location.addressLines.map((line, lineIndex) => (
                            <span key={line}>
                              {line}
                              {lineIndex < location.addressLines.length - 1 && <br />}
                            </span>
                          ))}
                        </p>
                        {location.details?.length ? (
                          <ul className="mb-3 space-y-1 text-sm text-muted-foreground">
                            {location.details.map((detail) => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        ) : null}
                        {location.mapLink ? (
                          <a
                            href={location.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary transition-colors hover:text-accent link-animated"
                          >
                            {location.mapLinkLabel ?? "Ver en Google Maps"}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" delay={200} className="lg:col-span-2">
              <div className="aspect-video rounded-2xl bg-azul-200 overflow-hidden transition-all duration-500 hover:shadow-xl group lg:aspect-[16/9]">
                {mapError ? (
                  <div className="flex h-full w-full items-center justify-center p-8 text-center">
                    <div>
                      <MapPin className="mx-auto mb-4 h-16 w-16 text-primary/40 animate-float-gentle" />
                      <p className="text-muted-foreground font-medium">{locationCopy.mapTitle}</p>
                    </div>
                  </div>
                ) : (
                  <div ref={mapRef} className="h-full w-full" aria-label={locationCopy.mapTitle} />
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};
