import ReactDOM from "react-dom/client";
import App from "./App.js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CartProvider } from "./context/CartContext.jsx";
const envKey = import.meta.env.VITE_HASURA_KEY;

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": envKey,
  },
  cache: new InMemoryCache(),
});
const root = document.getElementById("root");
ReactDOM.createRoot(root as HTMLElement).render(
  <ApolloProvider client={client}>
    <CartProvider>
      <App />
    </CartProvider>
  </ApolloProvider>
);
