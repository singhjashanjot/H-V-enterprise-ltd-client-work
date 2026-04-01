import * as React from 'react';
import { cn } from '@hv/utils';

type SurfaceLevel =
  | 'background'
  | 'surface'
  | 'surface-container-lowest'
  | 'surface-container-low'
  | 'surface-container'
  | 'surface-container-high'
  | 'dark';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  surface?: SurfaceLevel;
  as?: 'section' | 'div' | 'article' | 'aside';
  containerClassName?: string;
  fullWidth?: boolean;
}

const surfaceClasses: Record<SurfaceLevel, string> = {
  background: 'bg-background',
  surface: 'bg-surface',
  'surface-container-lowest': 'bg-surface-container-lowest',
  'surface-container-low': 'bg-surface-container-low',
  'surface-container': 'bg-surface-container',
  'surface-container-high': 'bg-surface-container-high',
  dark: 'bg-on-background text-surface',
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      surface = 'background',
      as: Component = 'section',
      containerClassName,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(surfaceClasses[surface], 'py-16 md:py-24 lg:py-32', className)}
        {...props}
      >
        <div
          className={cn(
            !fullWidth && 'mx-auto max-w-7xl px-5 md:px-8 lg:px-12',
            containerClassName
          )}
        >
          {children}
        </div>
      </Component>
    );
  }
);
Section.displayName = 'Section';

export { Section };
