import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@hv/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-body text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-[10px] hover:shadow-[0_12px_24px_rgba(38,61,42,0.15)]',
        secondary:
          'border-[1.5px] border-on-surface bg-transparent text-on-surface rounded-[10px] hover:bg-on-surface hover:text-surface',
        tertiary:
          'text-on-surface underline underline-offset-4 decoration-2 hover:decoration-primary hover:text-primary',
        ghost: 'text-on-surface hover:bg-surface-container rounded-[10px]',
      },
      size: {
        sm: 'h-9 px-4 text-xs',
        md: 'h-11 px-6 text-sm',
        lg: 'h-13 px-8 text-base',
        xl: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
