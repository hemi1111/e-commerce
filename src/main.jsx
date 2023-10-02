import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { CartProvider } from "./context/CartContext.jsx";
const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_KEY,
  },
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <CartProvider>
      <App />
    </CartProvider>
  </ApolloProvider>
);
