import gql from 'graphql-tag';

export default gql`
  {
    user {
      id
      email
      items {
        id
        title
      }
    }
  }
`;
