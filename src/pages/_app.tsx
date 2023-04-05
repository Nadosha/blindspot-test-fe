import type { AppProps } from 'next/app'
import {client} from "./api/graphql-config";
import {ApolloProvider} from "@apollo/client";
import {GlobalStyle} from "@Styles/global.styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <GlobalStyle/>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}
