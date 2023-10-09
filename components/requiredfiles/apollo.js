import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost';
import {from} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {ASYNC_STORAGE_KEYS, getDataFromAsyncStorage} from '../../constants';

const cache = new InMemoryCache();

export const configureGraphQL = (API_URL: string) => {
  const httpLink = new HttpLink({
    uri: API_URL,
  });

  const authMiddleware = setContext(async (_, {headers = {}}) => {
    let userToken = await getDataFromAsyncStorage(ASYNC_STORAGE_KEYS.TOKEN);
    if (userToken === null) return Promise.reject();
    return {
      headers: {
        ...headers,
        authorization: userToken,
      },
    };
  });

  const errorWare = onError(({graphQLErrors, networkError}) => {
    if (graphQLErrors) {
      graphQLErrors.map((err) => {
        return {
          message: err.message,
          statusCode: err && err.extensions && err.extensions.code,
        };
      });
    }

    // handle request problem without token or expired token
    if (networkError) {
      console.log('networkError', JSON.stringify(networkError));
      if (
        networkError.response &&
        networkError.response.status === 400 &&
        networkError.response.headers.map.server === 'Google Frontend'
      ) {
        if (
          /No Authorization header/gim.exec(networkError?.bodyText) !== null ||
          /Verifying Token Failed/gim.exec(networkError?.bodyText) !== null
        ) {
          console.log('EVENTLISTENER_TYPES.INVALID_TOKEN');
        }
      }
    }
  });
  return new ApolloClient({
    cache,
    link: errorWare.concat(from([authMiddleware, httpLink])),
  });
};
