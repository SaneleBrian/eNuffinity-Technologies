import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { legalPolicies, type LegalPolicyId } from "@/data/legalContent";

type LegalModalProps = {
  policy: LegalPolicyId;
  trigger: ReactNode;
};

export const LegalModal = ({ policy, trigger }: LegalModalProps) => {
  const content = legalPolicies[policy];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
          <DialogDescription>Last updated: {content.lastUpdated}</DialogDescription>
        </DialogHeader>
        <div className="space-y-5 pr-1">
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-foreground font-semibold mb-1.5 text-sm">{section.heading}</h3>
              {section.body.map((paragraph, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
