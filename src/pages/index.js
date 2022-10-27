import Head from "next/head";
// Components
import Main from "../components/Main/Main";
import Inspiration from "../components/Inspiration/Inspiration";
import Experts from "../components/Experts/Experts";
import Services from "../components/Services/Services";

// export async function getStaticProps() {
//   const dados = await fetch("http://localhost:1337/api/services");
//   const dadosJson = await dados.json();
//   const services = await dadosJson.data;

//   return {
//     props: { services },
//   };
// }

export default function Home({ services }) {
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
      {/* <div>
        {services.map((service) => (
          <h1 key={service.id}>{service.attributes.service_name}</h1>
        ))}
      </div> */}
    </>
  );
}
