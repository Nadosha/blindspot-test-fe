import type { AppProps } from 'next/app'
import {client} from "./api/graphql-config";
import {ApolloProvider} from "@apollo/client";
import {GlobalStyle} from "@Styles/global.styles";
import {AuthProvider} from "./api/auth";
import ProtectedRoute from "@Utils/protectedRoutes";
import {useRouter} from "next/router";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
  return (
    <ApolloProvider client={client}>
        <GlobalStyle/>
        <AuthProvider>
            <ProtectedRoute router={router}>
                <Component {...pageProps} />
            </ProtectedRoute>
        </AuthProvider>
    </ApolloProvider>
  )
}
