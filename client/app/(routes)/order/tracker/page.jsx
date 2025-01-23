import Tracker from "./Tracker";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  alternates: {
    canonical: `https://www.hothousenorthwood.co.uk/order/tracker`,
  },
};

const page = () => {
  return (
    <>
      {/* Head content */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
      {/* Add script to the head */}
      <Script
        id="google-conversion-tracking"
        strategy="beforeInteractive" // Ensures script is added to the head
      >
        {`
            gtag('event', 'conversion', {
      'send_to': 'AW-16762107211/xO2YCLeY1JIaEMvq5bg-',
      'value': {{ checkout.subtotal_price | divided_by: 100.0 }},
      'currency': 'GBP',
      'transaction_id': '{{ order_number }}',
  });
        `}
      </Script>
      </Head>


      <div>
        <Tracker />
      </div>
    </>
  );
};

export default page;
