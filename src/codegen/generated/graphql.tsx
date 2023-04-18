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

export type Album = {
  __typename?: 'Album';
  _id: Scalars['String'];
  /** Album ID - ID that comes from iTunes Provider */
  albumID: Scalars['String'];
  /** Artist Name */
  artist: Scalars['String'];
  /** Artist ID - comes from iTunes provider */
  artistID: Scalars['String'];
  /** URL of album's cover image */
  cover: Scalars['String'];
  /** Title/Name of Album */
  title: Scalars['String'];
};

export type CreateAlbumInput = {
  /** Album ID - ID that comes from iTunes Provider */
  albumID: Scalars['String'];
  /** Artist Name */
  artist: Scalars['String'];
  /** Artist ID - comes from iTunes provider */
  artistID: Scalars['String'];
  /** URL of album's cover image */
  cover: Scalars['String'];
  /** Title/Name of Album */
  title: Scalars['String'];
};

export type CreateGameInput = {
  /** User who initiate this Game */
  user: Scalars['String'];
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
  _id: Scalars['String'];
  /** User current stage */
  currentRound: Scalars['String'];
  /** Indicates if game was completed */
  isCompleted: Scalars['Boolean'];
  /** List of rounds in Game */
  rounds: Array<Round>;
  /** User who initiate this Game */
  user: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Scalars['Boolean'];
  createGame: Scalars['Boolean'];
  createUser: CreateUserOutput;
  removeUser: User;
  updateGame: Scalars['Boolean'];
  updateUser: User;
};


export type MutationCreateGameArgs = {
  createGameInput: CreateGameInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
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
  album: Album;
  albums: Array<Album>;
  currentGame?: Maybe<Game>;
  games: Array<Game>;
  user: User;
};


export type QueryAlbumArgs = {
  id: Scalars['Int'];
};


export type QueryCurrentGameArgs = {
  user: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Round = {
  __typename?: 'Round';
  _id: Scalars['String'];
  /** Albums that proposed for user choice */
  albums: Array<Album>;
  /** Indicates is round completed */
  isCompleted: Scalars['Boolean'];
  /** Is answer correct or not  */
  isCorrect?: Maybe<Scalars['Boolean']>;
  /** Album that asked in current round  */
  requestedAlbum: Album;
};

export type RoundInput = {
  _id: Scalars['String'];
  /** Albums that proposed for user choice */
  albums?: InputMaybe<Array<CreateAlbumInput>>;
  /** Indicates is round completed */
  isCompleted: Scalars['Boolean'];
  /** Is answer correct or not  */
  isCorrect: Scalars['Boolean'];
  /** Album that asked in current round  */
  requestedAlbum?: InputMaybe<CreateAlbumInput>;
};

export type UpdateGameInput = {
  _id: Scalars['String'];
  /** User current stage */
  currentRound?: InputMaybe<Scalars['String']>;
  /** Indicates if game was completed */
  isCompleted: Scalars['Boolean'];
  round: RoundInput;
  /** User who initiate this Game */
  user?: InputMaybe<Scalars['String']>;
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

export type CreateGameMutationVariables = Exact<{
  game: CreateGameInput;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: boolean };

export type UpdateGameMutationVariables = Exact<{
  updateGameInput: UpdateGameInput;
}>;


export type UpdateGameMutation = { __typename?: 'Mutation', updateGame: boolean };

export type GetCurrentUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetCurrentUserQuery = { __typename?: 'Query', user: { __typename?: 'User', _id: string, userName: string, gender: string, score: number } };

export type GetCurrentGameQueryVariables = Exact<{
  user: Scalars['String'];
}>;


export type GetCurrentGameQuery = { __typename?: 'Query', currentGame?: { __typename?: 'Game', _id: string, user: string, isCompleted: boolean, currentRound: string, rounds: Array<{ __typename?: 'Round', _id: string, isCompleted: boolean, isCorrect?: boolean | null, requestedAlbum: { __typename?: 'Album', albumID: string, title: string, artist: string, artistID: string, cover: string }, albums: Array<{ __typename?: 'Album', albumID: string, title: string, artist: string, artistID: string, cover: string }> }> } | null };


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
export const CreateGameDocument = gql`
    mutation createGame($game: CreateGameInput!) {
  createGame(createGameInput: $game)
}
    `;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      game: // value for 'game'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const UpdateGameDocument = gql`
    mutation updateGame($updateGameInput: UpdateGameInput!) {
  updateGame(updateGameInput: $updateGameInput)
}
    `;
export type UpdateGameMutationFn = Apollo.MutationFunction<UpdateGameMutation, UpdateGameMutationVariables>;

/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      updateGameInput: // value for 'updateGameInput'
 *   },
 * });
 */
export function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameMutation, UpdateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameMutation, UpdateGameMutationVariables>(UpdateGameDocument, options);
      }
export type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export type UpdateGameMutationResult = Apollo.MutationResult<UpdateGameMutation>;
export type UpdateGameMutationOptions = Apollo.BaseMutationOptions<UpdateGameMutation, UpdateGameMutationVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser($userId: String!) {
  user(id: $userId) {
    _id
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
export const GetCurrentGameDocument = gql`
    query getCurrentGame($user: String!) {
  currentGame(user: $user) {
    _id
    user
    isCompleted
    currentRound
    rounds {
      _id
      isCompleted
      isCorrect
      requestedAlbum {
        albumID
        title
        artist
        artistID
        cover
      }
      albums {
        albumID
        title
        artist
        artistID
        cover
      }
    }
  }
}
    `;

/**
 * __useGetCurrentGameQuery__
 *
 * To run a query within a React component, call `useGetCurrentGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentGameQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useGetCurrentGameQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentGameQuery, GetCurrentGameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentGameQuery, GetCurrentGameQueryVariables>(GetCurrentGameDocument, options);
      }
export function useGetCurrentGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentGameQuery, GetCurrentGameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentGameQuery, GetCurrentGameQueryVariables>(GetCurrentGameDocument, options);
        }
export type GetCurrentGameQueryHookResult = ReturnType<typeof useGetCurrentGameQuery>;
export type GetCurrentGameLazyQueryHookResult = ReturnType<typeof useGetCurrentGameLazyQuery>;
export type GetCurrentGameQueryResult = Apollo.QueryResult<GetCurrentGameQuery, GetCurrentGameQueryVariables>;