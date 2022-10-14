import Head from "next/head";
// Components
import Main from "../components/Main/Main";
import Inspiration from "../components/Inspiration/Inspiration";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pâmela Ramos Beauty Studio</title>
      </Head>
      <Main />
      <Inspiration />
    </>
  );
}
