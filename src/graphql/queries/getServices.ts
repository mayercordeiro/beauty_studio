const GET_SERVICES = /* GraphQL */ `
query GET_SERVICES {
    items {
      data {
        attributes {
          service
          item_name
          price
          description_text
        }
      }
    }
  }
`;

// const GET_IMAGE_SERVICES = /* GraphQL */ `
// query GET_IMAGE_SERVICES {
//     items {
//       data {
//         attributes {
//                   image {
//             data {
//               attributes {
//                 url
//                 alternativeText
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `; 

export default GET_SERVICES;