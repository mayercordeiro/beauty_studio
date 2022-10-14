// CSS
import "../styles/global.scss";
// Components
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
