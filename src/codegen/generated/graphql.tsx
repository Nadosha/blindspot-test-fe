import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateGameInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type CreateUserInput = {
  /** User Gender  */
  gender: Scalars['String'];
  /** User Password  */
  password: Scalars['String'];
  /** How much point user earn in total  */
  score?: InputMaybe<Scalars['Float']>;
  /** User userName  */
  userName: Scalars['String'];
};

export type CreateUserOutput = {
  __typename?: 'CreateUserOutput';
  /** User Gender of user that have been created  */
  gender: Scalars['String'];
  /** Result message  */
  msg: Scalars['String'];
  /** How much point user earn in total  */
  score: Scalars['Float'];
  /** ID of user that have been created  */
  userId: Scalars['String'];
  /** User Name of user that have been created  */
  userName: Scalars['String'];
};

export type Game = {
  __typename?: 'Game';
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: Game;
  createUser: CreateUserOutput;
  removeGame: Game;
  removeUser: User;
  updateGame: Game;
  updateUser: User;
};


export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationRemoveGameArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateGameArgs = {
  updateGameInput: UpdateGameInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  game: Game;
  games: Array<Game>;
  user: User;
};


export type QueryGameArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type UpdateGameInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type UpdateUserInput = {
  /** User Gender  */
  gender?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** User Password  */
  password?: InputMaybe<Scalars['String']>;
  /** How much point user earn in total  */
  score?: InputMaybe<Scalars['Float']>;
  /** User userName  */
  userName?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  /** User gender  */
  gender: Scalars['String'];
  /** User firstName  */
  password: Scalars['String'];
  /** How much point user earn in total  */
  score: Scalars['Float'];
  /** User firstName  */
  userName: Scalars['String'];
};

export type CreateUserMutationVariables = Exact<{
  user: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserOutput', msg: string, userId: string, userName: string, gender: string, score: number } };

export type GetCurrentUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetCurrentUserQuery = { __typename?: 'Query', user: { __typename?: 'User', userName: string, gender: string, score: number } };


export const CreateUserDocument = gql`
    mutation createUser($user: CreateUserInput!) {
  createUser(input: $user) {
    msg
    userId
    userName
    gender
    score
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser($userId: String!) {
  user(id: $userId) {
    userName
    gender
    score
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, options);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;