import BodyClassName from '@/app/components/BodyClassName';

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BodyClassName className="links-standalone" />
      {children}
    </>
  );
}
