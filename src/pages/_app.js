// CSS
import "../styles/global.scss";
// Components
import Header from "../components/Header/Header";
// Hooks
import useScrollPosition from "../components/Hooks/useScrollPosition";

function MyApp({ Component, pageProps }) {
  // Scroll Position
  const scrollPosition = useScrollPosition();

  return (
    <>
      <header id={scrollPosition > 250 ? "header_bkg" : "header_off"}>
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
