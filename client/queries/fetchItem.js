import gql from 'graphql-tag';

export default gql`
  query FetchItem ($id:ID!){
    item(id:$id) {
      id
      title
      description
      maker
      year
      price
      user{
        items
      }
    }
  }
`;
