import gql from 'graphql-tag';

export default gql`
  query UserItems($id: ID!){
    itemsByUser(id:$id){
      id
      title
    }
  }
`;
