import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "apollo-boost";
import { onError } from "apollo-link-error";
import { getAuthToken } from "../../constants";

export const getLink = (uri) => new HttpLink({ uri: uri });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = getAuthToken();
  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : "",
    },
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError.message}`);
  }
});

export const getClient = (uri) =>
  new ApolloClient({
    link: authLink.concat(errorLink).concat(getLink(uri)), // Chain it with the HttpLink
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
        errorPolicy: "ignore",
      },
      query: {
        fetchPolicy: "no-cache",
        errorPolicy: "all",
      },
    },
  });
