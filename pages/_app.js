import '../global.css';

/* eslint-disable-next-line */
export default function MyApp({ Component, pageProps }) {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Component {...pageProps} />
    </div>
  );
}
