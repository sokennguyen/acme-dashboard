import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  //Title template at Root
  title: {
    template: '%s | Acme Dashboard', //template
    default: 'Acme Dashboard',
  },
  description: 'a very long and detailed desc',
  metadataBase: new URL('https://nskien.xyz'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
