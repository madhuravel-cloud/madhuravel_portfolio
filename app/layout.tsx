import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madhuravel T — CSE • DSA • ML",
  description: "Portfolio of Madhuravel T — CSE student, problem solver and machine learning developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
