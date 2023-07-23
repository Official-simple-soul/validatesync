import Layout from '@/components/Layout';
import '@/styles/globals.css';
import { ChatProvider } from '../../context/context';
export default function App({ Component, pageProps }) {
  return (
    <ChatProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChatProvider>
  );
}
