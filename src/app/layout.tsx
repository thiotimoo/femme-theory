import type { Metadata } from "next";
import { Gabarito} from "next/font/google";
import "./globals.css";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Femme Theory",
  description: "be confident, with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
