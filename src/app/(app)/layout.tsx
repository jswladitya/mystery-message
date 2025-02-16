import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mystery Message",
  description: "Send Anonymous Messages and feedbacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`antialiased`}
        >
          <div className="ewlative w-full flex items-center justify-center dark">
          <Navbar/>
          </div>
          {children}
        </body>
    </html>
  );
}
