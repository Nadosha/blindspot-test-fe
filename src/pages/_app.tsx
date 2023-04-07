import type { AppProps } from 'next/app'
import {client} from "./api/graphql-config";
import {ApolloProvider} from "@apollo/client";
import {GlobalStyle} from "@Styles/global.styles";
import {AuthProvider} from "./api/auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <GlobalStyle/>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </ApolloProvider>
  )
}
