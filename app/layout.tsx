import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://joeward.io'),
  title: {
    default: 'Joe Ward',
    template: 'Joe Ward | %s',
  },
  description: 'Efficiency | Creativity | Collaboration | Growth',
  openGraph: {
    title: 'Joe Ward',
    description: 'Efficiency | Creativity | Collaboration | Growth',
    url: 'https://joeward.io',
    siteName: 'Joe Ward',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        ' text-white bg-white dark:bg-black w-full max-w-full',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
      </head>
      <body className="antialiased w-full max-w-full md:max-w-2xl mb-40 flex flex-col md:flex-row mx-auto mt-2 overflow-x-hidden">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
