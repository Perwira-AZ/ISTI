import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Alert() {
  const router = useRouter();
  useEffect(() => {
    const ws = new WebSocket('wss://74.226.175.227:8080/');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (message) => {
      if (message.data.startsWith('ALERT')) {
        const species_id = message.data.split(' ')[1];
        toast.error(`PERINGATAN: Penebangan Terdeteksi`);
        router.push(`/species/${species_id}/#location`);
      } else if (message.data.startsWith('STOP')) {
        router.reload();
      }
    };

    ws.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      ws.close();
    };
  }, []);

  return <ToastContainer />;
}

export default Alert;
