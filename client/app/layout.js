import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header/Header";
import Footer from "./_components/layout/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hot House Pizza",
  description: "Pizza Website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <div className="pt-36">{children}</div>
          <Toaster position="top-right" richColors duration={2000} />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
