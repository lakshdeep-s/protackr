import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protrakr",
  description: "A FREE Project Management Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
