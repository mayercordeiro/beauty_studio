import Head from "next/head";
// Components
import Main from "../components/Main/Main";
import Inspiration from "../components/Inspiration/Inspiration";
import Experts from "../components/Experts/Experts";
import Services from "../components/Services/Services";
import { ServicesContextProvider } from "../contexts/ServicesContext";
// Queries
import client from "../graphql/client";
import GET_SERVICES from "../graphql/queries/getServices";

export default function Home() {
  return (
    <>
      <Head>
        <title>Extensão de Cílios em Francisco Beltrão | Pâmela Ramos</title>
        <meta
          name="description"
          content="Alongamento de cílios em Francisco Beltrão, você merece as melhores extensões de cílios de Francisco Beltrão, realçamos e valorizamos a sua beleza natural."
        ></meta>
      </Head>
      <Main />
      <Inspiration />
      <Experts />
      <ServicesContextProvider>
        <Services />
      </ServicesContextProvider>
    </>
  );
}
