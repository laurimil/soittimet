import gql from 'graphql-tag';

export default gql`
  mutation itemEdit ($id:ID!,$title:String,$description:String,$maker:String,$year:Int,$price:Int,$imageUrl:String){
    editItem(id:$id, title:$title, description:$description,maker:$maker,year:$year,price:$price,imageUrl:$imageUrl){
      id
      title
      description
      maker
      year
      price
    }
  }
`;
