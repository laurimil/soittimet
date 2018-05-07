import gql from 'graphql-tag';

export default gql`
mutation addItemToUser($userId:ID!,$title:String,$description:String,$maker:String,$year:Int,$price:Int,$imageUrl:String){
  addItemToUser(userId:$userId, title:$title, description:$description,maker:$maker,year:$year,price:$price,imageUrl:$imageUrl){
    id
  }
}
`;
