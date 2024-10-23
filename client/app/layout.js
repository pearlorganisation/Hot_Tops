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
    <meta name="google-site-verification" content="KNX-3vWjShPJyzrqVlhnyfiZYNUxUOWcaupO2aREIcE" />
    <meta name="msvalidate.01" content="23983C217832B5C4AAC786882981CDA6" />

{/* Adding noscript using dangerouslySetInnerHTML */}
<noscript
  dangerouslySetInnerHTML={{
    __html: `
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=406823858532963&ev=PageView&noscript=1" />
    `,
  }}
/>
  </head>

      {/* Google Analytics Script */}
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7NN5GJS7SP"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7NN5GJS7SP');
          `}
        </Script>

        {/* Google Ads Conversion Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16455767404"
        />
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16455767404');
          `}
        </Script>

        {/* gtag_report_conversion Function */}
<Script id="gtag-report-conversion">
{`function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-16577048939/GJvjCLe7h9cZEOvixuA9',
      'value': 1.0,
      'currency': 'GBP',
      'transaction_id': '',
      'event_callback': callback
  });
  return false;
}`}
</Script>

{/* Google Tag event */}
<Script id="google-tag-event">
  {`
    gtag('event', 'conversion_event_default', {
      // Add event parameters here if needed
    });
  `}
</Script>

{/* Meta Pixel Code */}
<Script id="meta-pixel">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '406823858532963');
    fbq('track', 'PageView');
  `}
</Script>

<Script>
{ ` 
gtag('event', 'conversion_event_phone_call_lead', {
    // <event_parameters>
  });
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
