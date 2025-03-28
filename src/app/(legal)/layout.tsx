import type { Metadata } from 'next';
import LegalNav from '@/components/LegalNav';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dachdecker-berlin.de',
  },
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalNav />
      <Breadcrumbs />
      <main className="py-8">
        {children}
      </main>
    </div>
  );
} 