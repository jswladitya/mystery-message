import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from '@/components/ui/toaster';


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
      <AuthProvider>
        <body
          className={`antialiased`}
          >
          
          {children}
          <Toaster />
        </body>
      </AuthProvider>
    </html>
  );
}
