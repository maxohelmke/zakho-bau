import { Button } from "@/components/ui/button";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

export default function ExternalMediaGate({
  title = "Externe Inhalte",
  description = "Zum Schutz Ihrer Daten wird dieser Inhalt erst nach Ihrer Einwilligung geladen.",
  onEnableLabel = "Externe Inhalte erlauben",
  children,
}: {
  title?: string;
  description?: string;
  onEnableLabel?: string;
  children: React.ReactNode;
}) {
  const { hydrated, hasExternalMedia, save, consent } = useCookieConsent();

  if (!hydrated) return null;
  if (hasExternalMedia) return <>{children}</>;

  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button
        variant="accent"
        size="sm"
        onClick={() =>
          save({
            externalMedia: true,
            analytics: consent?.analytics ?? false,
            marketing: consent?.marketing ?? false,
          })
        }
      >
        {onEnableLabel}
      </Button>
    </div>
  );
}

