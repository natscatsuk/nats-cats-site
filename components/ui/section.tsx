import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva(
  "max-w-6xl mx-auto px-6",
  {
    variants: {
      padding: {
        none: "",
        sm: "py-12",
        md: "py-20",
        lg: "py-24",
        xl: "py-28",
      },
      background: {
        white: "bg-white",
        offWhite: "bg-[var(--nc-offWhite)]",
        tintBlue: "bg-[#F0F4FF]",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      padding: "lg",
      background: "transparent",
    },
  }
);

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, background, as = "section", children, ...props }, ref) => {
    const Comp = as;
    const sectionClasses = sectionVariants({ padding, background });
    
    if (as === "div") {
      return (
        <div
          ref={ref as React.ForwardedRef<HTMLDivElement>}
          className={cn(sectionClasses, className)}
          {...props}
        >
          {children}
        </div>
      );
    }
    
    return (
      <section
        ref={ref as React.ForwardedRef<HTMLElement>}
        className={cn(sectionClasses, className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };

