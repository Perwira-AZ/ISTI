import '@/style/globals.css';
// import '@coreui/coreui/dist/css/coreui.min.css';
// import type { AppProps } from "next/app";
// import Head from "next/head";
// import AOS from "aos";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import "aos/dist/aos.css";
import Navbar from '@/components/navbar';
// import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  // { Component, pageProps }: AppProps
  //   const r = useRouter();
  //   const antiNavRoutes = [
  //     "/requests/login",
  //     "/requests/register",
  //     "/requests/payment",
  //     "/dashboard",
  //     "/dashboard/request",
  //     "/dashboard/history",
  //     "/dashboard/guide",
  //     "/dashboard/faq",
  //   ];
  //   useEffect(() => {
  //     AOS.init({
  //       once: false,
  //       duration: 800,
  //       easing: "ease-in-out",
  //     });
  //   }, []);
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
