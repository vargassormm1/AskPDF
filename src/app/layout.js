import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ask PDF",
  description: "Generated by Ralph Sormillon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
