import * as React from 'react';
import { cn } from '@hv/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="font-body text-xs font-medium uppercase tracking-[0.06em] text-on-surface-variant"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          className={cn(
            'h-12 w-full rounded-none border-0 border-b-2 border-outline-variant/40 bg-surface-container-lowest px-0 pb-2 pt-2 font-body text-base text-on-surface outline-none transition-colors placeholder:text-outline focus:border-primary',
            error && 'border-error focus:border-error',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="font-body text-xs text-error">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
