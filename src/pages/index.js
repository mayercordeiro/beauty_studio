import Head from "next/head";
// Components
import Main from "../components/Main/Main";
import Inspiration from "../components/Inspiration/Inspiration";
import Experts from "../components/Experts/Experts";
import OurServices from "../components/OurServices/OurServices";
import Reviews from "../components/Reviews/Reviews";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
// Queries
import client from "../graphql/client";
import GET_SERVICES from "../graphql/queries/getServices";

export default function Home(props) {
  const { servicesData } = props;

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
      <Experts />
      <Inspiration />
      <OurServices servicesData={servicesData} />
      <Reviews />
      <Newsletter />
    </>
  );
}

async function getData() {
  const res = await client.request(GET_SERVICES);
  const services = res.items.data;

  return services;
}

export async function getStaticProps(context) {
  const servicesData = await getData();

  return {
    props: {
      servicesData: servicesData,
    },
  };
}
