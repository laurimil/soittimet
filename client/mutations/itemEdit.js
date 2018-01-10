import gql from 'graphql-tag';

export default gql`
  mutation itemEdit ($ID:ID!,$title:String,$description:String,$maker:String,$year:Int,$price:Int){
    editItem(id:$ID, title:$title, description:$description,maker:$maker,year:$year,price:$price){
      id
      title
      description
      maker
      year
      price
    }
  }
`;
