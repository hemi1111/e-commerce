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

export const GET_SINGLE_ITEM = gql`
  query getSingleShoe($id: Int!) {
    shoes(where: { id: { _eq: $id } }) {
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

export const FILTER_BY_CATEGORY = gql`
  query getByCategory($category: String!) {
    shoes(where: { gender: { _eq: $category } }) {
      category
      company
      gender
      id
      image
      name
      price
      size
    }
  }
`;
