import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

export default gql`
mutation ItemCreate($userId:ID!,$title:String,$description:String,$maker:String,$year:Int,$price:Int){
  addItemToUser(userId:$userId, title:$title, description:$description,maker:$maker,year:$year,price:$price){
    id
    # items{
    #   id
    #   title
    #   description
    # }
  }
}
`;
