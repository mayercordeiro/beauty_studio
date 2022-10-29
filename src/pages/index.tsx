import Head from "next/head";
import { GetStaticProps } from "next";
import { ServicesProps } from "../types/api";
import client from "../graphql/client";
// Components
import Main from "../components/Main/Main";
import Inspiration from "../components/Inspiration/Inspiration";
import Experts from "../components/Experts/Experts";
import Services from "../components/Services/Services";
// Queries
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
      <Services />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const services = await client.request(GET_SERVICES);
  const data = services.items.data;

  console.log(data)

  return {
    props: {
      ...services
    }
  }
}