import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/Header/Header";
import Footer from "./_components/layout/Footer/Footer";
import StoreProvider from "./StoreProvider";
import { Toaster } from "sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Hot House pizza | Best Pizza in Northwood | Order online now',
  description: 'Discover the best pizza takeaway in Northwood at Hot House Pizza, Convenient online ordering, quick service, and unbeatable taste. Order now',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.jpg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="google-site-verification" content="9T3E5ht2epp1i_b1cSLxMbiP1yN7Jcc-_G1IIHlmiSk" />
    <meta name="msvalidate.01" content="23983C217832B5C4AAC786882981CDA6" />

  </head>
  <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16577048939"
      ></Script>
      <Script id="google-ads">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16577048939');
        `}
      </Script>

      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <div className="pt-36">{children}</div>
          <Toaster position="top-right" richColors duration={1000} />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
