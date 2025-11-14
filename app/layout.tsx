import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EU Tech Job Finder - Luxembourg, Finland, Estonia",
  description: "Find entry-level tech jobs with visa sponsorship in Luxembourg, Finland, and Estonia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
