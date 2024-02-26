import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      {/* <Head></Head> */}
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
        <style jsx global>{`
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
        `}</style>
      </AnimatePresence>
    </>
  );
}
