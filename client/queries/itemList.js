import gql from 'graphql-tag';

export default gql`
  {
    items{
      id
      title
      price
      imageUrl
    }
  }
`;
