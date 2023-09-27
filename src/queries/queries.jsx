import { gql } from "@apollo/client";

export const GET_SHOES = gql`
  query getShoes {
    shoes {
      category
      company
      gender
      id
      name
      price
      size
      image
    }
  }
`;
