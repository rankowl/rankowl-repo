import './globals.css';

export const metadata = {
  title: 'Rankowl - AI that works with your data',
  description: 'Connect apps, documents and databases with Rankowl AI',
  icons: {
    icon: '/logo-trans.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
