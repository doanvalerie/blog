import fonts from '@globals/fonts';
import metadata from '@globals/metadata.json';

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
