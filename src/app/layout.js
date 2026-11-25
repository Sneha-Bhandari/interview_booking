import { Montserrat } from "next/font/google";
import "./globals.css";
// import Footer from "@/component/Navigation/Footer";
import Navbar from "@/component/Navigation/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Interview Booking Portal",
  description:
    "Discover interview opportunities, schedule appointments, and manage your interview bookings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}