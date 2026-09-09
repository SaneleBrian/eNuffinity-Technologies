import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LegalModal } from "@/components/LegalModal";

const STORAGE_KEY = "cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const respond = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-40 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto glass rounded-2xl border border-border/60 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          We use strictly necessary local storage to remember your theme preference and this
          notice — no third-party tracking or advertising cookies. See our{" "}
          <LegalModal
            policy="cookies"
            trigger={
              <button
                type="button"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Cookie Policy
              </button>
            }
          />{" "}
          for details.
        </p>
        <div className="flex gap-3 shrink-0 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 sm:flex-none"
            onClick={() => respond("declined")}
          >
            Decline
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="flex-1 sm:flex-none"
            onClick={() => respond("accepted")}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
