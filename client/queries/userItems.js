
import gql from 'graphql-tag';

export default gql`
  {
    user {
      id
      items {
        id
        title
        price
      }
    }
  }
`;

// export default gql`
//   query UserItems($id: ID!){
//     itemsByUser(id:$id){
//       id
//       title
//     }
//   }
// `;
