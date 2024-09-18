import Image from "next/image";
import shopee from "../app/Shopee.svg";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopee App",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              <span className="self-center font-semibold whitespace-nowrap">
                <Image src={shopee} width={120} height={120} alt="shopee" />
              </span>
            </Link>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white md:bg-transparent md: md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 text-white md:bg-transparent md: md:p-0"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mx-auto my-7 px-4">{children}</div>
        <footer className="py-7">
          <div className="container mx-auto">
            <h2 className="text-center">developed by parinya yordming @2024</h2>
          </div>
        </footer>
      </body>
    </html>
  );
}
