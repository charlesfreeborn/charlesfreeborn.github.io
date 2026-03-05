// pages/_app.js
import "../styles/globals.css";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-T5VZ7SQFWR";

// Helper to send a pageview event
function pageview(url) {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Fire a pageview every time the route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== "undefined") {
        pageview(url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}
