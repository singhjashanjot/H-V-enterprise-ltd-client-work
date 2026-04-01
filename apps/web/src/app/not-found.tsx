import Link from 'next/link';
import { Button } from '@hv/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5">
      <span className="font-display text-8xl font-bold text-primary-container/20">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-on-surface">Page Not Found</h1>
      <p className="mt-2 max-w-md text-center font-body text-sm text-on-surface-variant">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button size="md">Back to Home</Button>
        </Link>
        <Link href="/contact">
          <Button variant="secondary" size="md">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
