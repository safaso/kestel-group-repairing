import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { BootstrapClient } from "./components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kestel Group Rebuilding",
  description: "Kestel Group Rebuilding",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />

        {children}

        <BootstrapClient />
      </body>
    </html>
  );
}
