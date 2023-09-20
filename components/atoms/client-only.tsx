'use client';
import * as React from 'react';

export function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => setHasMounted(true), []);

  return !hasMounted ? null : <>{children}</>;
}
