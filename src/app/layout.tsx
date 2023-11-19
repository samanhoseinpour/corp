import type { Metadata } from 'next';
import './globals.css';

import { Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'فضای ابری |‌ حرفه ای ترین فضای ابری در سرار کشور',
  description: 'حرفه ای ترین فضای ابری در سرار کشور',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
