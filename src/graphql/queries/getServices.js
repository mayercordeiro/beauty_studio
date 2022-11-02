const GET_SERVICES = /* GraphQL */ `
query GET_SERVICES {
  items {
		data {
			id
      attributes {
        item_name
        price
        service
        description_text
        image {
          data {
            id
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
`;

export default GET_SERVICES;
