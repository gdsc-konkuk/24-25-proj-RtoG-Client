import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { TbDeviceCctv } from "react-icons/tb";
import { RiHistoryFill } from "react-icons/ri";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RtoG",
  description: "Real-Time wildfire monitoring system",
};

const navItems = [
  { label: "Lives", href: "/lives", icon: <TbDeviceCctv /> },
  { label: "Records", href: "/records", icon: <RiHistoryFill /> },
];

const navStyle = "text-xl font-bold flex flex-row items-center gap-4";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-row h-[100vh] w-[100vw]`}
      >
        <nav className='flex flex-col gap-8 p-8 w-xs h-full items-start justify-start'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={navStyle}>
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
