import '@/style/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Alert from '@/components/alert';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="bg-white">
        <Navbar />
        <Alert />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
