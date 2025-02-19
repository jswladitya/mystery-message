import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Feedback App",
  description: "Get Real Feedbacks From Real People",
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
