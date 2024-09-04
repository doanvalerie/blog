import NavigationBar from '@components/NavigationBar/NavigationBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
