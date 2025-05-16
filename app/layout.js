import './globals.css';

export const metadata = {
  title: 'Rankowl - AI that works with your data',
  description: 'Connect apps, documents and databases with Rankowl AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
