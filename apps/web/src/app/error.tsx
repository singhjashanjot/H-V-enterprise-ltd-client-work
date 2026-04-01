'use client';

import Link from 'next/link';
import { Button } from '@hv/ui';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-error/10">
        <AlertCircle className="h-8 w-8 text-error" />
      </div>
      <h1 className="mt-6 font-display text-2xl font-semibold text-on-surface">
        Something went wrong
      </h1>
      <p className="mt-2 max-w-md text-center font-body text-sm text-on-surface-variant">
        We apologize for the inconvenience. Please try again, or contact us if the problem persists.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset} variant="secondary" size="md">
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
        <Link href="/">
          <Button size="md">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
