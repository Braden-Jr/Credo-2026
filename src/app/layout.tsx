import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Credo",
  description: "Minimal fashion brand showcase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="pt-16">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}