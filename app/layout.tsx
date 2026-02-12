import "./globals.css";

export const metadata = {
  title: "Designer Portfolio",
  description: "Modern Designer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white scroll-smooth">
        {children}
      </body>
    </html>
  );
}
