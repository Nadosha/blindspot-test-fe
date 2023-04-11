import React, {useEffect} from "react";
import  { useState, useContext, createContext } from 'react'
import {
    ApolloProvider,
    gql,
} from '@apollo/client'
import {client} from "./graphql-config";
import {
    useCreateUserMutation,
    useGetCurrentUserQuery
} from "../../codegen/generated/graphql";
import {getAuthToken, registerAuthToken, unregisterAuthToken} from "@Utils/Cookies";
import {ROUTES} from "@Utils/routes";
import {useRouter} from "next/router";

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
    const authAuthToken = getAuthToken();
    const router = useRouter();

    const {data} = useGetCurrentUserQuery({
        variables: {
            userId: authAuthToken
        },
        skip: !authAuthToken
    });

    const isSignedIn = !!authAuthToken;

    const [createUser] = useCreateUserMutation();

    const signUp = async ({ username, password, gender}) => {
        try {
            const result = await createUser({
                variables: {
                    user: {
                        userName: username,
                        password: password,
                        gender: gender,
                    }
                }
            });

            if(result.data?.createUser.userId) {
                registerAuthToken(result.data?.createUser.userId)
                await router.push(ROUTES.INDEX);
            }
        } catch (er) {
            console.log(er)
        }
    }

    const signOut = () => {
        unregisterAuthToken()
    }

    return {
        data,
        isSignedIn,
        signUp,
        signOut,
    }
}
