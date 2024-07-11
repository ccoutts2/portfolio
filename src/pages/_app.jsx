import { AnimatePresence } from "framer-motion";
import Router from "next/router";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, router }) {
  let copies = [];

  useEffect(() => {
    Router.events.on("beforeHistoryChange", onLoad);
    return () => {
      Router.events.off("beforeHistoryChange", onLoad);
    };
  }, []);

  const onLoad = () => {
    const nodes = document.querySelectorAll(
      "link[rel=stylesheet], style:not([media=x])"
    );
    copies = [...nodes].map((el) => el.cloneNode(true));

    for (let copy of copies) {
      copy.removeAttribute("data-n-p");
      copy.removeAttribute("data-n-href");

      document.head.appendChild(copy);
    }
  };

  const onExit = () => {
    for (let copy of copies) {
      document.head.removeChild(copy);
    }
  };

  return (
    <>
      <AnimatePresence mode="mount" onExitComplete={onExit}>
        <Component key={router.route} {...pageProps} />
        <Analytics />
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
