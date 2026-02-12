import "./globals.css";

export const metadata = {
  title: "Mahima Gupta — Brand & Visual Designer",
  description: "Portfolio of Mahima Gupta, Brand & Visual Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}
