import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        glass:
          "bg-white/80 backdrop-blur-sm border-[var(--nc-softBorder)] shadow-premium",
        solid:
          "bg-white border-[var(--nc-softBorder)] shadow-premium hover:shadow-float",
        gradient:
          "bg-white border-transparent shadow-premium hover:shadow-float",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  withGradientBorder?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, withGradientBorder, children, ...props }, ref) => {
    if (withGradientBorder) {
      return (
        <div
          ref={ref}
          className={cn("relative", className)}
          style={{
            background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--nc-royalBlue), var(--nc-royalBlueDark)) border-box",
            border: "1px solid transparent",
            borderRadius: "1rem",
          }}
          {...props}
        >
          <div className={cn("rounded-2xl p-6", cardVariants({ variant }))}>
            {children}
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

