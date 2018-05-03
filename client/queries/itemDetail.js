import gql from 'graphql-tag';

export default gql`
  query ItemDetail ($id:ID!){
    item(id:$id) {
      id
      title
      description
      maker
      year
      price
      user{
        items{
          id
          title
        }
      }
    }
  }
`;
