import './globals.css';

export const metadata = {
  title: 'Input App by Panit',
  description: 'Input App for Partnerhub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
