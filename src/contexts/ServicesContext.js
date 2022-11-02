import { createContext, useState, useEffect } from "react";
import client from "../graphql/client";
import GET_SERVICES from "../graphql/queries/getServices";

export const ServicesContext = createContext();

export const ServicesContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await client.request(GET_SERVICES);
      const services = res.items.data;
      setData(services);
    };

    fetchData();
  }, []);

  return (
    <ServicesContext.Provider value={{ data }}>
      {children}
    </ServicesContext.Provider>
  );
};
