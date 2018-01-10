import gql from 'graphql-tag';

export default gql`
  mutation itemRemove ($id:ID!){
    removeItem(id:$id) {
      id
    }
  }
`;
