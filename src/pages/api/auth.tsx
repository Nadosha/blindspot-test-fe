import  { useState, useContext, createContext } from 'react'
import {
    ApolloProvider,
    gql,
} from '@apollo/client'
import {client} from "./graphql-config";

const authContext = createContext(undefined);

export function AuthProvider({ children }) {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </authContext.Provider>
    )
};

export const useAuth = () =>  useContext(authContext);

const useProvideAuth = () => {
    const [authToken, setAuthToken] = useState(null)

    const isSignedIn = !!authToken;

    const getAuthHeaders = () => {
        if (!authToken) return null

        return {
            authorization: `Bearer ${authToken}`,
        }
    }

    const signIn = async ({ username, password }) => {
        const LoginMutation = gql`
            mutation signin($username: String!, $password: String!) {
                login(username: $username, password: $password) {
                    token
                }
            }
        `

        const result = await client.mutate({
            mutation: LoginMutation,
            variables: { username, password },
        })

        console.log(result)

        if (result?.data?.login?.token) {
            setAuthToken(result.data.login.token)
        }
    }

    const signOut = () => {
        setAuthToken(null)
    }

    return {
        setAuthToken,
        isSignedIn,
        signIn,
        signOut,
    }
}
