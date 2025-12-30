/**
 * app/layout.tsx
 * Root Layout - обёртка для всех страниц
 */

import { Providers } from './providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solana Dust Sweeper',
  description: 'Swap your dust tokens to SOL in one click',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
