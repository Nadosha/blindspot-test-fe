import {ApolloClient, from, HttpLink, InMemoryCache} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message}) => {
            alert(`GraphQL error: ${message}`);
        });
    }
    if(networkError) {
        alert(`Network error: ${networkError}`);
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:3030/graphql" }),
]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});