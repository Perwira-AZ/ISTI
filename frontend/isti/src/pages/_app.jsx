import '@/style/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
