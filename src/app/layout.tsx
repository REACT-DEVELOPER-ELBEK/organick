import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import Nav from "./nav/Nav";


export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
