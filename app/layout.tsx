import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";

export const metadata: Metadata = {
  title: "CRAFT-H",
  description: "Find to Happines In Your Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <body>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
