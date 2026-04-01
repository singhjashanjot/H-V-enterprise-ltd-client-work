import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@hv/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-[0.06em]',
  {
    variants: {
      variant: {
        default: 'rounded-full bg-surface-container-high px-3 py-1 text-primary-container',
        durability: 'rounded-full bg-[#EAE6E0] px-3 py-1.5 text-primary-container',
        outline:
          'rounded-full border border-outline-variant/40 px-3 py-1 text-on-surface-variant',
        success: 'rounded-full bg-primary-fixed/20 px-3 py-1 text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return <span ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />;
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
